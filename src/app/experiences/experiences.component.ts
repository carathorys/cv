import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cv-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  // tslint:disable:max-line-length
  public readonly provi3 = { default: 'The first year in this new position was about travelling. On every second week I was in Leeds (UK), we started to develop a new thing: The company previously used MobileIron to secure our apps, but the price of it was too high to enable it for every company user (~30.000 users). After a while the company started to use Kony Framework (back in 2015), which has had some Secure container solutions, but in the beginning of 2018 Kony announced the end of life of its secure container framework. So, I’ve joined to the UK team to develop a fully custom solution. We started it from zero, and currently we’re using it as a live solution. This year, I’ve started a new project called MyCam which is a solution for the Hungarian market: there is a new regulatory which forces the company to copy the customer’s identifiers. This solution is a mobile app, and uses the framework what we developed in the last year.' };
  public readonly provi2 = { default: 'When I rejoined to the company, my job was initially to do almost the same thing what I did when I left the company (previously I left it because I has had problems with some other colleagues). After a while a new project removed the barriers between the Provident markets (UK, Poland, Czech Republic, Romania and Hungary), we started to develop to the other markets also. I’ve started to learn ReactJS, and ReactNative. The last one didn’t take too much time as a company standard was chosen to be Xamarin Native (for Android only).' };
  public readonly digic = { default: 'Here I’ve worked with one of my brothers. This company has a very old system which has only two layers: a database, and a WinForms application. Our job was to upgrade this old system to have a new, modern layout. We left this company together as they were not able to move on to the new technologies (they doesn’t let us to do our job), and they also has had very big security issues what they doesn’t accepted.' };
  public readonly budacode = { default: 'Here I’ve learned how to use the modern web frameworks, or at least I have had some overview about how they are working. As this company lived mostly from frontend development, the pleasure was mine to do every server-side task.' };
  public readonly provi1 = { default: 'Here I’ve has had several development tasks, including some architectural design. I’ve learned how to use the Microsoft’s ecosystem, including MS SQL, SSRS, PowerShell, WCF. I designed and implemented solutions to receive and process data from outside of our internal network using WCF services, and HTTPS client certificate authentication. Most of our vendors, who tried to send data to our servers are still using this solution. I’ve also created some websites which communicates via SignalR with a host system, and can execute SQL stored procedures to show performance reports in our Call Center.' };
  public readonly wponline = { default: 'In the beginning my job was to create websites (with some standard administration UI) for multiple customers (mostly from Hungary, but we had some Dutch and Dubai customers also), configure and maintain Linux servers. After a while it has been changed, and we started to create a Social RSS Reader called Feedy. For this task we started to use OAuth protocol to authenticate users via third parties like Twitter, Facebook or Google. In that time, I’ve also found a way to import RSS feeds and categories from the Google Reader.' };

  constructor() {
  }

  ngOnInit() {
  }

}
