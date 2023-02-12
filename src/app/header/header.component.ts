import { MilkService } from './../milk.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isAdmin!: boolean;
  name!: string;
  customStyle = {
    fontSize:'50px',
    color:'blue',
    fontStyle:'italic'
  }
  customClass = {
    'text-red': true,
    'text-bold': true
  }
  constructor(private milkService: MilkService) {
    this.name = "Sashi"
    console.log(this.milkService.getMilk());
    const value = this.milkService.getRole();
    if (value === 'Admin'){
      this.isAdmin = false;
    }
  }
  title: string = "Shoppify";
  navItems: string[] = ["Home", "About", "Contact Us"];
  searchKey: string = "";
  userObj:any= {}
  userRecords: any[] = [{
    "id": 1,
    "first_name": "Kean",
    "last_name": "Hoodless",
    "email": "khoodless0@japanpost.jp",
    "gender": "Male",
    "ip_address": "84.221.182.185"
  }, {
    "id": 2,
    "first_name": "Codie",
    "last_name": "Vowell",
    "email": "cvowell1@vkontakte.ru",
    "gender": "Male",
    "ip_address": "255.52.102.190"
  }, {
    "id": 3,
    "first_name": "Sheela",
    "last_name": "Mallaby",
    "email": "smallaby2@123-reg.co.uk",
    "gender": "Female",
    "ip_address": "128.91.22.125"
  }, {
    "id": 4,
    "first_name": "Kelli",
    "last_name": "Larvent",
    "email": "klarvent3@slideshare.net",
    "gender": "Female",
    "ip_address": "197.119.42.154"
  }, {
    "id": 5,
    "first_name": "Madalena",
    "last_name": "Bouts",
    "email": "mbouts4@harvard.edu",
    "gender": "Female",
    "ip_address": "151.141.134.68"
  }, {
    "id": 6,
    "first_name": "Brittany",
    "last_name": "Murdie",
    "email": "bmurdie5@flickr.com",
    "gender": "Female",
    "ip_address": "60.245.151.164"
  }, {
    "id": 7,
    "first_name": "Antonio",
    "last_name": "Martinec",
    "email": "amartinec6@mapquest.com",
    "gender": "Male",
    "ip_address": "26.107.53.90"
  }, {
    "id": 8,
    "first_name": "Flossi",
    "last_name": "Jindacek",
    "email": "fjindacek7@dot.gov",
    "gender": "Agender",
    "ip_address": "57.143.56.124"
  }, {
    "id": 9,
    "first_name": "Carilyn",
    "last_name": "Finnes",
    "email": "cfinnes8@addtoany.com",
    "gender": "Female",
    "ip_address": "61.140.236.255"
  }, {
    "id": 10,
    "first_name": "Oberon",
    "last_name": "Fuente",
    "email": "ofuente9@miibeian.gov.cn",
    "gender": "Male",
    "ip_address": "0.202.156.141"
  }, {
    "id": 11,
    "first_name": "Abbot",
    "last_name": "Hassewell",
    "email": "ahassewella@cdc.gov",
    "gender": "Male",
    "ip_address": "228.79.172.212"
  }, {
    "id": 12,
    "first_name": "Jeffry",
    "last_name": "Townby",
    "email": "jtownbyb@twitpic.com",
    "gender": "Male",
    "ip_address": "65.121.186.231"
  }, {
    "id": 13,
    "first_name": "Wilmer",
    "last_name": "Nethercott",
    "email": "wnethercottc@wisc.edu",
    "gender": "Male",
    "ip_address": "26.185.185.25"
  }, {
    "id": 14,
    "first_name": "Lewiss",
    "last_name": "Lerego",
    "email": "lleregod@cdc.gov",
    "gender": "Genderfluid",
    "ip_address": "111.238.64.12"
  }, {
    "id": 15,
    "first_name": "Shaun",
    "last_name": "Bromige",
    "email": "sbromigee@is.gd",
    "gender": "Male",
    "ip_address": "100.122.250.185"
  }, {
    "id": 16,
    "first_name": "Hurlee",
    "last_name": "Fellos",
    "email": "hfellosf@t-online.de",
    "gender": "Male",
    "ip_address": "131.87.37.94"
  }, {
    "id": 17,
    "first_name": "Verile",
    "last_name": "Polye",
    "email": "vpolyeg@topsy.com",
    "gender": "Agender",
    "ip_address": "112.248.230.238"
  }, {
    "id": 18,
    "first_name": "Rafe",
    "last_name": "Roubert",
    "email": "rrouberth@phoca.cz",
    "gender": "Male",
    "ip_address": "81.211.63.154"
  }, {
    "id": 19,
    "first_name": "Creigh",
    "last_name": "Pickavant",
    "email": "cpickavanti@studiopress.com",
    "gender": "Agender",
    "ip_address": "132.7.20.23"
  }, {
    "id": 20,
    "first_name": "Freddie",
    "last_name": "Dabney",
    "email": "fdabneyj@adobe.com",
    "gender": "Male",
    "ip_address": "126.154.197.74"
  }]
  searchNav() {
    alert(this.searchKey);

  }

}


