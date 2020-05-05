import { Component, OnInit  } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { TranslateService } from '@ngx-translate/core';
import {PageService} from '../../../common_service/page.service';
import {Title , Meta} from '@angular/platform-browser';
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
 import { ConfigService } from '../../../common_service/ConfigService.service';
 declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  private user: SocialUser;
  private loggedIn: boolean;
  constructor(
    private authService: AuthService,
    private translate: TranslateService,
    private pageSerice: PageService,
    private title:Title,
    private meta:Meta,
     private config: ConfigService) {
      // if (navigator.geolocation) {
      //   navigator.geolocation.getCurrentPosition((position) => {
      //       localStorage.setItem('lat', (position.coords.latitude).toString());
      //       localStorage.setItem('long', (position.coords.longitude).toString());
      //    console.log(position.coords.latitude);
      //   });
      // } else {
      //   alert("Geolocation is not supported by this browser.");
      // } 
     }
 
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  } 
 
  signOut(): void {
    this.authService.signOut();
  }
  pay(): void {
    
  }

  ngOnInit() {
    const  page_data={
        page_title :"Home",
        meta_data :{
          Keywords:" Home Speedmate",
          description:"Home page speedmate ",
        },
    };
    this.pageSerice.pageInfo(this,page_data);
    this.runDependent();
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
  

  runDependent(){
    $(".regular").slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
  });

  $('.service-carousel').owlCarousel({
    loop: true,
    dots: false,
    margin: 5,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            nav: true
        },
        600: {
            items: 3,
            nav: true
        },
        1000: {
            items: 4,
            nav: true,
            loop: false,
            margin: 5
        }
    }
});  

$('#brands').owlCarousel({
  loop: true,
  dots: false,
  margin: 10,
  responsiveClass: true,
  responsive: {
      0: {
          items: 1,
          nav: true
      },
      600: {
          items: 4,
          nav: false
      },
      1000: {
          items: 5,
          nav: true,
          loop: false,
          margin: 20
      }
  }
});

$('#banner_service_carousel').owlCarousel({
  loop: true,
  dots: false,
  margin: 10,
  responsiveClass: true,
  responsive: {
      0: {
          items: 2,
          nav: true
      },
      600: {
          items: 3,
          nav: false
      },
      1000: {
          items: 4,
          nav: true,
          loop: false,
          margin: 20
      }
  }
})

$('#instagram_carousel').owlCarousel({
  loop: true,
  dots: false,
  margin: 10,
  responsiveClass: true,
  responsive: {
      0: {
          items: 1,
          nav: true
      },
      600: {
          items: 3,
          nav: false
      },
      1000: {
          items: 4,
          nav: false,
          loop: false,
          margin: 30
      }
  }
});

$("#find_tyre").click(function(e){
  e.preventDefault();
  $(".banner_shop").show();
  $(".banner_text, .banner_shop_service").hide();
});
$("#find_service").click(function(e){
  e.preventDefault();
  $(".banner_shop_service").show();
  $(".banner_text, .banner_shop").hide();
});

$("#servicetab .item a").on('click', function(e) {
  e.preventDefault();
  var tabs = $(this).data('servicescont');
  $('.item').removeClass("hilight");
  $(this).parent().addClass("hilight");
  
  $("#tabscontent .servicescont:not('.hide')").stop().fadeOut('fast', function(e) {
    e.preventDefault();
      $(this).addClass('hide');
   $('#tabscontent .servicescont[data-tabs="'+tabs+'"]').fadeIn('fast').removeClass('hide');
  });
});

  }

}
