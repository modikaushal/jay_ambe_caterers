<template>
	<div class="reservation">
		<!--Page Title-->
	    <section class="page-title">
	        <div class="container">
	            <div class="banner-title text-center">
	                <h1>Reservation</h1>          
	                <ul class="title-manu">
	                    <li><a href="index.html">home</a></li>
	                    <li>/</li>
	                    <li>Reservation</li>
	                </ul>     
	            </div>     
	        </div>
	    </section>
		<!--End Page Title-->

		<!--Start Reservation area-->
		<section class="reservation-area style-two">
		    <div class="container">
		        <div class="row">
		            <div class="col-md-12">
		                <div class="sec-title center style-two">
		                    <h2>Book Your Table</h2>
		                </div>
		                    <div class="form-sec">
		                        <form name="reservation_form" class="reservation-form contact-form" action="" method="post">
		                        <div class="row">
		                            <div class="col-md-4 col-sm-12 col-xs-12">
		                                <div class="form-group">
		                                    <input type="text" name="name" placeholder="Your Name" required="">
		                                </div>                                                    
		                            </div>
		                            <div class="col-md-4 col-sm-12 col-xs-12">
		                                <div class="form-group">
		                                    <input type="tel" name="phone" placeholder="Phone" required="">
		                                </div>                                                    
		                            </div>
		                            <div class="col-md-4 col-sm-12 col-xs-12">
		                                <div class="form-group">
		                                    <input type="email" name="email" placeholder="Email" required="">
		                                </div>                  
		                            </div>
		                            <div class="col-md-4 col-sm-12 col-xs-12">
		                                <div class="form-group">
		                                   <select>
		                                      <option value="number">Number of Person</option>
		                                      <option value="1">1</option>
		                                      <option value="2">2</option>
		                                      <option value="3">3</option>
		                                    </select>
		                                </div>                  
		                            </div>
		                            <div class="col-md-4 col-sm-12 col-xs-12">
		                                <div class="form-group">
		                                    <input type="text" id="datepicker" class="datepicker" placeholder="mm/dd/yyyy">
		                                </div>                  
		                            </div>
		                            <div class="col-md-4 col-sm-12 col-xs-12">
		                                <div class="form-group">
		                                   <select>
		                                      <option value="time">Your Time</option>
		                                      <option value="1">12.00Am - 2.30AM</option>
		                                      <option value="2">12.00Am - 2.30AM</option>
		                                      <option value="3">12.00Am - 2.30AM</option>
		                                      <option value="3">12.00Am - 2.30AM</option>
		                                      <option value="3">12.00Am - 2.30AM</option>
		                                      <option value="3">12.00Am - 2.30AM</option>
		                                      <option value="3">12.00Am - 2.30AM</option>
		                                      <option value="3">12.00Am - 2.30AM</option>
		                                      <option value="3">12.00Am - 2.30AM</option>
		                                    </select>
		                                </div>                  
		                            </div>
		                            <div class="col-md-12 col-sm-12 col-xs-12">
		                                <div class="form-group">
		                                    <textarea name="form_message" class="form-control textarea required" placeholder="Message"></textarea>
		                                </div>
		                                <div class="form-group text-right form-messages">
		                                    <button type="submit" class="thm-btn bg-clr3">book now</button>
		                                </div>                            
		                            </div>
		                        </div>
		                        </form>
		                    </div>
		            </div>
		        </div>
		    </div>
		</section>
		<!--End Reservation area-->

		<!--Start newslater area-->
		<section class="newslater-area">
		    <div class="container">
		        <div class="row">
		            <div class="col-md-3 col-sm-4 col-xs-12">
		                <div class="sec-title left">
		                    <h2>Subscribe Us</h2>
		                </div>
		            </div>
		            <div class="col-md-9 col-sm-8 col-xs-12">
		                <div class="form-sec">
		                    <form name="newslatter_form" class="newslatter-form" action="" method="post">
		                        <div class="row">
		                            <div class="col-md-9 col-sm-7 col-xs-12">
		                                <div class="form-group">
		                                    <input type="email" name="email" placeholder="Email" required="">
		                                </div>                                                    
		                            </div>
		                            <div class="col-md-3 col-sm-5 col-xs-12">
		                                <div class="form-group text-right form-messages">
		                                    <button type="submit" class="thm-btn bg-clr1">subscribe now</button>
		                                </div>                            
		                            </div>
		                        </div>
		                    </form>
		                </div>
		            </div>
		        </div>
		    </div>
		</section>
		<!--End newslater area-->
	</div>
</template>