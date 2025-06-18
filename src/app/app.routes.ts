import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { SkillsComponent } from './component/skills/skills.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { ContactComponent } from './component/contact/contact.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'portfolio',component:PortfolioComponent},
    {path:'skills',component:SkillsComponent},
    {path:'projects',component:ProjectsComponent},
    {path:'contact',component:ContactComponent},
];
