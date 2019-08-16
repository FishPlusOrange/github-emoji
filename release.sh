#!/usr/bin/env sh
set -e
echo "Enter release version:"
read VERSION

read -p "Release version $VERSION - are you sure? (y/n)" -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
# install
npm install

# pre
npm version $VERSION --no-git-tag-version
npm run build

# commit
git tag v$VERSION
git commit -am "Release $VERSION"

# push
git push origin master
git push origin tags/v$VERSION

# publish
npm publish --access=public
fi
