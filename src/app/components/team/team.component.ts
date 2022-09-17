import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';

gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  @ViewChild('teamWrapper', {static: true}) teamWrapper!: ElementRef<HTMLDivElement>; 
  @ViewChild('team', {static: true}) team!: ElementRef<HTMLDivElement>; 

  teamMembers: any[] = [{name: "Myrza Mustafa", position: "UI/UX Designer", description: "Pandora is a software architect who specializes in infrastructure and backend engineering.", linkedin: "https://www.linkedin.com/in/iammustafabey/", instagram: "https://www.instagram.com/iammustafabey/", profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDDG4Irx4VNdOEtzTvs8vZA6kde-eEY2bfIg&usqp=CAU"}, {name: "Myrza Mustafa", position: "UI/UX Designer", description: "Pandora is a software architect who specializes in infrastructure and backend engineering.", linkedin: "https://www.linkedin.com/in/iammustafabey/", instagram: "https://www.instagram.com/iammustafabey/", profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDDG4Irx4VNdOEtzTvs8vZA6kde-eEY2bfIg&usqp=CAU"}, {name: "Myrza Mustafa", position: "UI/UX Designer", description: "Pandora is a software architect who specializes in infrastructure and backend engineering.", linkedin: "https://www.linkedin.com/in/iammustafabey/", instagram: "https://www.instagram.com/iammustafabey/", profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDDG4Irx4VNdOEtzTvs8vZA6kde-eEY2bfIg&usqp=CAU"}, {name: "Myrza Mustafa", position: "UI/UX Designer", description: "Pandora is a software architect who specializes in infrastructure and backend engineering.", linkedin: "https://www.linkedin.com/in/iammustafabey/", instagram: "https://www.instagram.com/iammustafabey/", profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDDG4Irx4VNdOEtzTvs8vZA6kde-eEY2bfIg&usqp=CAU"},]

  constructor(@Inject(DOCUMENT)private document: Document) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.initScrollAnimation() 
    }, 3000) 
  }

  initScrollAnimation(): void {

    const cards = gsap.utils.toArray(".card");

    gsap.to(".team", {
      scrollTrigger: {
        trigger: ".team",
        scrub: true,
        pin: true,
        start: "top top"
      }
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".team",
        start: "top top",
        scrub: true,
        pin: true,
        toggleActions: "play reverse play reverse",
      }
    })

    tl.to(cards, {
      xPercent: -100 * (cards.length - 1),
      ease: "none",
      scrollTrigger: {
        start: "left left",
        trigger: ".teamWrapper",
        scrub: 1
      }
    })
  }

}
