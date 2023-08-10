#!/bin/sh

# Set these variables for your installation
ROOT=jazz-chords
AWS_ACCOUNTID=922129242138

# Remove any previous function.zip
rm -rf function.zip

cd ../chords
zip -r function.zip .
cd ../setup
mv ../chords/function.zip .

aws lambda update-function-code --function-name $ROOT \
--zip-file fileb://function.zip --region us-east-1

echo "Waiting for it to be created...."
sleep 60
echo "Finishing Process!"


# to do - maybe auto create the API

