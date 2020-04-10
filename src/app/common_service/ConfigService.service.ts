import { Injectable } from '@angular/core';
@Injectable()
export class ConfigService {
  backendUrl="http://localhost:3000/";
  razorpay={
      key_id: 'rzp_test_0YIeGJsgDNpNjk',
      key_secret: '7LhXrekD6WhxSITm6qOJQcZG',
  };
  social_key={
    google: '54104912998-0q49pk98crukcasftf873mkttj3ubd8e.apps.googleusercontent.com',
    key_secret: '7LhXrekD6WhxSITm6qOJQcZG',
};
}
