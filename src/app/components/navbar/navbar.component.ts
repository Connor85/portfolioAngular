import { Component, OnInit } from "@angular/core";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  copyMessage(val: string) {
    let selBox = document.createElement("textarea");
    // selBox.style.position = "fixed";
    // selBox.style.left = "0";
    // selBox.style.top = "0";
    // selBox.style.opacity = "0";
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand("copy");
    document.body.removeChild(selBox);
  }
  ngOnInit() {}
}
