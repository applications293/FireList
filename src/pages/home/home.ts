
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  items: Observable<any[]>;
  name;

  constructor(public navCtrl: NavController, public navParams: NavParams, private myDB: AngularFireDatabase) {
    this.items = myDB.list('cuisines').valueChanges();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  writeCuisine(){
    this.myDB.list('cuisines').push(this.name);
  }

}
