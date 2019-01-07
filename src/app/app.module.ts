import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { routing } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SplashComponent } from "./components/splash/splash.component";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { AboutComponent } from "./components/about/about.component";
import { FooterComponent } from "./components/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    HomeComponent,
    NavbarComponent,
    SkillsComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [BrowserModule, routing],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
