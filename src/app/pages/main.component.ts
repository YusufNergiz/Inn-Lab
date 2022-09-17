import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild('animatedTextContainer', {static: true}) animatedTextContainer!: ElementRef<HTMLDivElement>;  
  @ViewChild('text1', {static: true}) text1!: ElementRef<HTMLDivElement>;  
  @ViewChild('text2', {static: true}) text2!: ElementRef<HTMLDivElement>;  
  @ViewChild('text3', {static: true}) text3!: ElementRef<HTMLDivElement>;  
  @ViewChild('teamSection', {static: true}) teamSection!: ElementRef<HTMLDivElement>; 
  @ViewChild('teamContainer', {static: true}) teamContainer!: ElementRef<HTMLDivElement>;  
  @ViewChild('teamTrack', {static: true}) teamTrack!: ElementRef<HTMLDivElement>; 

  team: any[] = [{name: "Myrza Mustafa", position: "UI/UX Designer", description: "Pandora is a software architect who specializes in infrastructure and backend engineering.", linkedin: "https://www.linkedin.com/in/iammustafabey/", instagram: "https://www.instagram.com/iammustafabey/"}, {name: "Myrza Mustafa", position: "UI/UX Designer", description: "Pandora is a software architect who specializes in infrastructure and backend engineering.", linkedin: "https://www.linkedin.com/in/iammustafabey/", instagram: "https://www.instagram.com/iammustafabey/"}, {name: "Myrza Mustafa", position: "UI/UX Designer", description: "Pandora is a software architect who specializes in infrastructure and backend engineering.", linkedin: "https://www.linkedin.com/in/iammustafabey/", instagram: "https://www.instagram.com/iammustafabey/"}, {name: "Myrza Mustafa", position: "UI/UX Designer", description: "Pandora is a software architect who specializes in infrastructure and backend engineering.", linkedin: "https://www.linkedin.com/in/iammustafabey/", instagram: "https://www.instagram.com/iammustafabey/"}, {name: "Myrza Mustafa", position: "UI/UX Designer", description: "Pandora is a software architect who specializes in infrastructure and backend engineering.", linkedin: "https://www.linkedin.com/in/iammustafabey/", instagram: "https://www.instagram.com/iammustafabey/"}]

  public innerWidth: any;

  mobile: boolean = false;

  fontSize!: string;

  constructor(@Inject(DOCUMENT)private document: Document) { }

  ngOnInit(): void {
    this.initScrollAnimation()
  }

  initScrollAnimation(): void {

    gsap.to(this.animatedTextContainer.nativeElement, {
      scrollTrigger: {
        trigger: this.animatedTextContainer.nativeElement,
        scrub: true,
        pin: true,
      }
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.animatedTextContainer.nativeElement,
        start: "top 20%",
        scrub: true,
        toggleActions: "play reverse play reverse",
      }
    })

    tl.to(this.text1.nativeElement, {opacity: 1, duration: 10, pin: true})
      .to(this.text1.nativeElement, {opacity: 0, duration: 10, pin: true})
      .to(this.text2.nativeElement, {opacity: 1, duration: 10, pin: true})
      .to(this.text2.nativeElement, {opacity: 0, duration: 10, pin: true})
      .to(this.text3.nativeElement, {opacity: 1, duration: 10, pin: true})
      .to(this.text3.nativeElement, {opacity: 0, duration: 10, pin: true})

    gsap.to(this.teamSection.nativeElement, {
      scrollTrigger: {
        trigger: this.teamSection.nativeElement,
        scrub: true,
        pin: true
      } 
    })

    let sections = gsap.utils.toArray(this.teamContainer.nativeElement);

    gsap.to(sections, {
      xPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: this.teamSection.nativeElement,
        pin: true,
        scrub: 1,
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: "+=3500",
      }
    });

    // const cardContainers = gsap.utils.toArray(this.teamContainer.nativeElement);

    // const teamTl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: this.teamSection.nativeElement,
    //     start: "top top",
    //     end: "bottom bottom",
    //     scrub: 1,
    //     markers: true
    //   }
    // }).to(cardContainers, {
    //   xPercent: -100 * (cardContainers.length - 1),
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: this.teamSection.nativeElement,
    //     pin: true,
    //     scrub: 1,
    //     end: "+=3500",
    //   }
    // })
  }

  @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this.innerWidth = window.innerWidth;
      if (this.innerWidth < 1000) {
        this.mobile = true;
        this.fontSize = '35px'
      }
      else {
        this.mobile = false
        this.fontSize = '60px'
      }
}


}
