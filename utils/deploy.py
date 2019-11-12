from subprocess import check_output
import json
import os

output_dir = 'out'
deploy_bucket = 'ilhwan-web'

os.system(f'aws s3 sync {output_dir} s3://{deploy_bucket}/ --delete')

config = {
    'ErrorDocument': {
        'Key': '404.html'
    },
    'IndexDocument': {
        'Suffix': 'index.html'
    },
    'RoutingRules': [
        {
            'Condition': {
                'HttpErrorCodeReturnedEquals': '404',
                'KeyPrefixEquals': os.path.splitext(fn)[0]
            },
            'Redirect': {
                'ReplaceKeyWith': fn
            }
        }
        for fn in os.listdir(output_dir) if fn.endswith('.html') and fn not in ['404.html', 'index.html']
    ]
}

config_str = json.dumps(config)

if os.name == 'nt':
    config_str = config_str.replace('"', '\\"')

os.system(f'aws s3api put-bucket-website --bucket {deploy_bucket} --website-configuration "{config_str}"')
