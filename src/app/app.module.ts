import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { JWT_OPTIONS, JwtModule } from 'angular-jwt';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

export function tokenGetter() {
  return 'SOME_TOKEN';
}

export function getAuthScheme(_request: any) {
  return 'Bearer ';
}

export function jwtOptionsFactory() {
  return {
    tokenGetter,
    authScheme: getAuthScheme,
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
      },
    }),
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule { }
