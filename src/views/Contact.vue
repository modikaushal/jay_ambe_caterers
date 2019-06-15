<template>
	<div class="contact">
		<!--Page Title-->
	    <section class="page-title">
	        <div class="container">
	            <div class="banner-title text-center">
	                <h1>Contact</h1>          
	                <ul class="title-manu">
	                    <li><a href="index.html">home</a></li>
	                    <li>/</li>
	                    <li>Contact</li>
	                </ul>     
	            </div>     
	        </div>
	    </section>
		<!--End Page Title-->

		<!--Start Map Area-->
		<section class="map-area">
		    <div class="container">
		        <div class="row">
		            <div class="col-md-12">
		                <div id="map" class="map-cont"></div>      
		            </div>
		        </div>
		    </div>
		</section>
		<!--End Map Area-->

		<!--Start contact area-->
		<section class="contact-page">
		    <div class="container">
		        <div class="row">
		            <div class="col-md-6 col-sm-12">
		                <div class="contact-form-area">
		                    <div class="sec-title left">
		                        <h2>Contact Form</h2>
		                    </div>
		                    <form name="contact_form" id="contact-form" class="default-form contact-form" action="php/sendemail.php" method="post">
		                        <div class="row clearfix">
		                            <div class="col-md-12">
		                                <input type="text" placeholder="Your Name" name="text" />
		                            </div>
		                            <div class="col-md-12">
		                                <input type="email" placeholder="Your Mail" name="mail" />
		                            </div>
		                            <div class="col-md-12">
		                                <textarea placeholder="Your Text......" name="mail"></textarea>
		                            </div>
		                            <div class="col-md-12 text-right">
		                                <button class="thm-btn bg-clr3">Send Now</button>
		                            </div>
		                        </div>
		                    </form>
		                </div><!-- Comment Form -->
		            </div>

		            <div class="col-md-5 col-md-offset-1 col-sm-12">
		                <div class="contact-info">
		                    <div class="sec-title left">
		                        <h2>Get In Touch</h2>
		                        <h4>Address: Essex St. New York, USA</h4>
		                        <h4>Phone: +385 21 333 777</h4>
		                        <h4>Email: info@restaurantdany.com</h4>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
		</section>
		<!--End contact area-->

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