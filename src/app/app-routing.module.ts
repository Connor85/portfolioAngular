import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SplashComponent } from "./components/splash/splash.component";
import { HomeComponent } from "./components/home/home.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { AboutComponent } from "./components/about/about.component";

const appRoutes: Routes = [
  {
    path: "",
    component: SplashComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "skills",
    component: SkillsComponent
  },
  {
    path: "about",
    component: AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
