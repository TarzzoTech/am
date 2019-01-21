# REFERENCES:

  ##Speech Recognition:  https://ionicframework.com/docs/native/speech-recognition/

  ## Text To Speech: https://ionicframework.com/docs/native/text-to-speech/

  ## api-ai-javascript: https://github.com/dialogflow/dialogflow-javascript-client

  ## Cordova AI Plugin: https://www.javascripttuts.com/creating-an-ionic-ai-chatbot-with-api-ai/
  
  ## npm Cordova: https://github.com/dialogflow/dialogflow-cordova-client
    

# ERROR REFERENCES:

  ## AI index.js.map not found https://github.com/dialogflow/dialogflow-cordova-client/issues/28
  ##   https://github.com/dialogflow/dialogflow-javascript-client/issues/39

  ## ionic cordova platform add android@6.4.0


#Generate APK:

1. chnage the widget id in config.xml

2. run "ionic cordova build --release android".

3. It generates the unsigned apk file.

#Sign The Apk:

1. Check Keytool in cmd, if working no problem, otherwise install jdk and add the jdk bin path to the path Environment Variable.(C:\Program Files\Java\jdk1.7.0_79\bin)

2. Then run "keytool -genkey -v -keystore <my-release-key>.keystore -alias <alias-name> -keyalg RSA -keysize 2048 -validity 10000"

    Note: Give any password as your wish.

3. After running the above cmd it will generate "<my-release-key>.keystore" file inside the application folder.

4. Next To sign the unsigned APK, run the "jarsigner" tool which is also included in the JDK.

5. Move the Unsign build apk to the main folder.

6. After run the cmd "jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore <my-release-key>.keystore <app-release-unsigned>.apk <alias-name>".

7. Enter the password same as given before as in step 2.
