REM #!/usr/bin/env sh

REM set -e

npm run build

cd dist

echo 'tude.ga' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:tude-webhost/beta.tude.ga.git master:gh-pages

cd -