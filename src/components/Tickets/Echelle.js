import React from 'react';
function Echelle() {
    return(

<div class="col-lg-12">
<div class="card">
    <div class="row">
        <div class="col-md-8">
            <div class="maps map-500 padding-20">
                <div id="monthly-target">
                </div>
            </div>
        </div>
        <div class="col-md-4 border left border-hide-sm">
            <div class="card-block">
                <h2>Funding Source </h2>
                <div class="mrg-top-40">
                    <div>
                        <canvas height="230" id="allocation-chart"></canvas>
                    </div>
                </div>
                <div class="widget-legends mrg-top-30">
                    <div class="relative mrg-top-15">
                        <span class="status primary"> </span>
                        <span class="pdd-left-20 font-size-16"><b class="text-dark">45%</b> Texas</span>
                    </div>
                    <div class="relative mrg-top-15">
                        <span class="status info"> </span>
                        <span class="pdd-left-20 font-size-16"><b class="text-dark">25%</b> California</span>
                    </div>
                    <div class="relative mrg-top-15">
                        <span class="status warning"> </span>
                        <span class="pdd-left-20 font-size-16"><b class="text-dark">15%</b> Florida</span>
                    </div>
                    <div class="relative mrg-top-15">
                        <span class="status success"> </span>
                        <span class="pdd-left-20 font-size-16"><b class="text-dark">10%</b> New York</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card-footer d-none d-md-inline-block">
        <div class="text-center">
            <div class="row">
                <div class="col-md-10 ml-auto mr-auto">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="pdd-vertical-5">
                                <p class="no-mrg-btm"><b class="text-dark font-size-16">11,868</b> Customers</p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="pdd-vertical-5">
                                <p class="no-mrg-btm"><b class="text-dark font-size-16">36,267</b> Orders</p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="pdd-vertical-5">
                                <p class="no-mrg-btm"><b class="text-dark font-size-16">87,288</b> Stock Left</p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="pdd-vertical-5">
                                <p class="no-mrg-btm"><b class="text-dark font-size-16">6,877</b> Pending</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    )}
    export default Echelle;