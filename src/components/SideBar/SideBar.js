import React from 'react';
import './SideBar.css';

function SideBar() {
 return ( <div class="side-nav">
 <div class="side-nav-inner">
     <div class="side-nav-logo">
         <a href="index.html">
             <div class="logo logo-dark" style="background-image: url('assets/images/logo/logo.png')"></div>
         </a>
     </div>
     <ul class="side-nav-menu scrollable">
         <li class="nav-item active">
             <a class="" href="index.html">
                 <span class="icon-holder"><i class="ti-home"></i></span>
                 <span class="title">Dashboard</span>
             </a>
         </li>
         <li class="nav-item dropdown">
             <a class="dropdown-toggle" href="javascript:void(0);">
                 <span class="icon-holder"><i class="ti-package"></i></span>
                 <span class="title">Apps</span>
                 <span class="arrow"><i class="ti-angle-right"></i></span>
             </a>
             <ul class="dropdown-menu">
                 <li>
                     <a href="apps.email.html">Email</a>
                 </li>
                 <li>
                     <a href="apps.calendar.html">Calendar</a>
                 </li>
                 <li>
                     <a href="apps.social.html">Social</a>
                 </li>
                 <li>
                     <a href="apps.task.html">Task</a>
                 </li>
             </ul>
         </li>
         <li class="nav-item dropdown">
             <a class="dropdown-toggle" href="javascript:void(0);">
                 <span class="icon-holder"><i class="ti-palette"></i></span>
                 <span class="title">UI Elements</span>
                 <span class="arrow"><i class="ti-angle-right"></i></span>
             </a>
             <ul class="dropdown-menu">
                 <li>
                     <a href="ui.buttons.html">Buttons</a>
                 </li>
                 <li>
                     <a href="ui.cards.html">Cards</a>
                 </li>
                 <li>
                     <a href="ui.notification.html">Notification</a>
                 </li>
                 <li>
                     <a href="ui.tabs.html">Tabs &amp; Accordions</a>
                 </li>
                 <li>
                     <a href="ui.modals.html">Modals</a>
                 </li>
                 <li>
                     <a href="ui.progress-slider.html">Progress &amp; Slider</a>
                 </li>
                 <li>
                     <a href="ui.typography.html">Typography</a>
                 </li>
                 <li>
                     <a href="ui.icons.html">Icons</a>
                 </li>
             </ul>
         </li>
         <li class="nav-item dropdown">
             <a class="dropdown-toggle" href="javascript:void(0);">
                 <span class="icon-holder"><i class="ti-file"></i></span>
                 <span class="title">Forms</span>
                 <span class="arrow"><i class="ti-angle-right"></i></span>
             </a>
             <ul class="dropdown-menu">
                 <li>
                     <a href="forms.elements.html">Form Elements</a>
                 </li>
                 <li>
                     <a href="forms.layouts.html">Form Layouts</a>
                 </li>
                 <li>
                     <a href="forms.wizard.html">Form Wizard</a>
                 </li>
             </ul>
         </li>
         <li class="nav-item dropdown">
             <a class="dropdown-toggle" href="javascript:void(0);">
                 <span class="icon-holder"><i class="ti-layout-media-overlay"></i></span>
                 <span class="title">Tables</span>
                 <span class="arrow"><i class="ti-angle-right"></i></span>
             </a>
             <ul class="dropdown-menu">
                 <li>
                     <a href="tables.basic-table.html">Basic Table</a>
                 </li>
                 <li>
                     <a href="tables.datatable.html">Data Table</a>
                 </li>
             </ul>
         </li>
         <li class="nav-item dropdown">
             <a class="dropdown-toggle" href="javascript:void(0);">
                 <span class="icon-holder"><i class="ti-pie-chart"></i></span>
                 <span class="title">Charts</span>
                 <span class="arrow"><i class="ti-angle-right"></i></span>
             </a>
             <ul class="dropdown-menu">
                 <li>
                     <a href="charts.chartjs.html">ChartJs</a>
                 </li>
                 <li>
                     <a href="charts.sparkline.html">Sparkline</a>
                 </li>
                 <li>
                     <a href="charts.nvd3.html">Nvd3</a>
                 </li>
                 <li>
                     <a href="charts.rickshaw.html">Ricksaw</a>
                 </li>
             </ul>
         </li>
         <li class="nav-item dropdown">
             <a class="dropdown-toggle" href="javascript:void(0);">
                 <span class="icon-holder"><i class="ti-map-alt"></i></span>
                 <span class="title">Map</span>
                 <span class="arrow"><i class="ti-angle-right"></i></span>
             </a>
             <ul class="dropdown-menu">
                 <li>
                     <a href="maps.vector-map.html">Vector Map</a>
                 </li>
                 <li>
                     <a href="maps.google-map.html">Google Map</a>
                 </li>
             </ul>
         </li>
         <li class="nav-item dropdown">
             <a class="dropdown-toggle" href="javascript:void(0);">
                 <span class="icon-holder"><i class="ti-files"></i></span>
                 <span class="title">Pages</span>
                 <span class="arrow"><i class="ti-angle-right"></i></span>
             </a>
             <ul class="dropdown-menu">
                 <li>
                     <a href="pages.signin.html">Sign In</a>
                 </li>
                 <li>
                     <a href="pages.signup.html">Sign Up</a>
                 </li>
                 <li>
                     <a href="pages.account-settings.html">Account Settings</a>
                 </li>
                 <li>
                     <a href="pages.invoice.html">Invoice</a>
                 </li>
                 <li>
                     <a href="pages.faq.html">FAQ</a>
                 </li>
                 <li>
                     <a href="pages.gallery.html">Gallery</a>
                 </li>
                 
             </ul>
         </li>
         <li class="nav-item dropdown">
             <a class="dropdown-toggle" href="javascript:void(0);">
                 <span class="icon-holder"><i class="ti-help-alt"></i></span>
                 <span class="title">Site Error</span>
                 <span class="arrow"><i class="ti-angle-right"></i></span>
             </a>
             <ul class="dropdown-menu">
                 <li>
                     <a href="404.html">404 Error page</a>
                 </li>
                 <li>
                     <a href="500.html">500 Error page</a>
                 </li>
             </ul>
         </li>
     </ul>
 </div>
</div>);
}


export default SideBar;

