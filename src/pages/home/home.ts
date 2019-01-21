import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { SpeechRecognition } from "@ionic-native/speech-recognition";
import { TextToSpeech } from "@ionic-native/text-to-speech";
import { ApiAiClient, ApiAiConstants } from "api-ai-javascript";


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  private AI = new ApiAiClient({
    accessToken: "04d84207daea480a89b943cfb6669434",
    lang: ApiAiConstants.AVAILABLE_LANGUAGES.EN
  });

  constructor(
    private sR: SpeechRecognition,
    private tTS: TextToSpeech
  ) {

  }

  ngOninit() {
    this.sR.hasPermission()
      .then((has: boolean) => {
        if (!has) {
          this.sR.requestPermission()
            .then(
            () => console.log("granted"),
            () => console.log("denied")
            );
        }
      });
    // this.askMe("who are you");
  }

  askMe(msg: string) {
    this.AI.textRequest(msg)
      .then(
      (res) => this.speekBack(res.result.fulfillment.speech)
      )
      .catch(
        (err) => console.log(err)
      );
  }

  speek() {
    this.sR.startListening()
      .subscribe(
      ((matches: Array<string>) => {
        if(navigator.onLine) {
          this.askMe(matches[0]);
        } else {
          this.speekBack(matches[0]);
        }
      })
      );
  }

  speekBack(text) {
    const TTSOptions = {
      text: text,
      locale: "en-US"
    };
    this.tTS.speak(TTSOptions).then(
      () => console.log("succes")
    ).catch(
      err => console.log(err)
      );
  }

  stopSpeech() {
    this.tTS.stop().then(
      () => console.log("stopped"),
      () => console.log("request failed")
    );
  }

}
