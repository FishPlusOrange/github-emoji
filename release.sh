#!/bin/bash

set -e
echo "Enter release version:"
read VERSION
read -p "Release version $VERSION - are you sure? (y/n)" -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
# install
yarn

# pre
yarn version --new-version $VERSION --no-git-tag-version
yarn build

# commit
git tag v$VERSION
git commit -am "Release $VERSION"

# push
git push origin master
git push origin tags/v$VERSION

# publish
yarn publish --new-version $VERSION --access public
fi
