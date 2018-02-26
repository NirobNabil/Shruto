<?php
/**
 * Created by PhpStorm.
 * User: Twin_N
 * Date: 1/15/2018
 * Time: 3:28 PM
 */

$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$conn = mysqli_connect($dbhost, $dbuser, $dbpass);

if(! $conn ){
    die('Could not connect: ' . mysqli_error());
}else {
    echo 'Connected successfully';
}


$db = mysqli_select_db($conn,'test');

#$sql = "INSERT INTO volunteers (name, `E-mail`, Address, Contact_Number) VALUES ('gg', 'thetwin311100@gmail.com', 'johnson Road', '01715821432 01715820613')";

#if (mysqli_query($conn, $sql)) {
#    echo "New record created successfully";
#} else {
#    echo "Error: " . $sql . "" . mysqli_error($conn);
#}
$txt = "";

if(isset($_POST["submit"])){
    //echo "came in";

    $links = $_POST["Dev_links"];


    foreach( $_POST as $key => $val ){
        //$txt = $txt . "The link is " .$link."\n";
        //echo gettype($val);
        if(gettype($val)=="array"){
            echo "printing array of" . $key ." <br>";
            echo arrToStrnng($val) . "<br>";
        }else {
            echo "key= ".$key." val= ".$val."<br>";
        }
    }

    $qr = "INSERT INTO volunteers (`name`, `E-mail`, `Address`, `Contact_Number`, `Social Links`, `Dev Links`, `Work Links`, `Occupation`, `Skills`) VALUES ('". $_POST["name"] . "','" . $_POST["email"] . "','" . $_POST["address"] . "','" . $_POST["contact"] . "','" . arrToStrnng($_POST["Social_links"] ) . "','" . arrToStrnng($_POST["Dev_links"] ) . "','" . arrToStrnng($_POST["site_links"] ) . "','" . $_POST["occupation"] . "','" . skills_arrToString($_POST["skills"], $_POST["platforms"], $_POST["langs"], $_POST["frames"]) . "')";
    echo $qr;

    if(mysqli_query($conn, $qr)){
        echo "succees!";
    }else{
        echo "fuck it >:(";
        echo "<br>";
        echo mysqli_error($conn);
    }



}else{
    echo "gg";
}

mysqli_close($conn);

function arrToStrnng($arr){
    $str = "";
    foreach ($arr as $elem) {
        $str .= $elem . "  ";
    }
    $str .= "\n";
    return $str;
}

function skills_arrToString($skills, $platforms, $langs, $frames){
    $str = "";
    $str .= arrToStrnng($skills) . "\n";
    $str .= arrToStrnng($platforms) . "\n";
    $str .= arrToStrnng($langs) . "\n";
    $str .= arrToStrnng($frames) . "\n";

    return $str;
}

//function


?>


<head>
    <script src="vol_form.js" type="application/javascript"></script>
    <link href="index.css" rel="stylesheet" type="text/css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="navbar.css" rel="stylesheet" type="text/css">
    <link href="css/select_menu/cs-select.css" rel="stylesheet" type="text/css">
    <link href="css/select_menu/cs-skin-border.css" rel="stylesheet" type="text/css">
    <script src="js/select_menu/classie.js"></script>
    <script src="js/select_menu/selectFx.js"></script>
    <script src="js/jquery-3.1.1.js"></script>
</head>

<body>
<!--<img src="background.svg" class="background"><br>-->

<div class="vol_form_container">
    <form class="vol_form" action="index.php" method="POST">

        <input class="identity" type="text" name="name" placeholder="Name">
        <!-- not mandatory -->
        <input class="identity" type="text" name="address" placeholder="Present Address">
        <input class="identity" type="text" name="email" placeholder="email">
        <input class="identity" type="text" name="contact" placeholder="contact number">

        <div class="selection_container input_container">
            <label>Occupation:</label>
            <select name="occupation" class="selection" >
                <option>student</option>
                <option>professional shitposter</option>
                <option>enroute to greatness</option>
                <option>professional</option>
            </select>
        </div>
        <br>

        <!-- social links -->
        <!-- not mandatory -->
        <div id="social_links" class="links">
            <h3 class="links_heading">Social Account Links</h3>  <span class="links_decoration"></span>
            <div class="all_inputs">
                <div class="input_container">
                    <label>Facebook Account Link:</label>	<input type="text" name="Social_links[]">
                </div>
            </div>
            <br>
            <div class="add_butt_container">
                <button value="" type="button" class="add_field"> Add New Field </button>
                <input value="" type="text" class="butt_name" placeholder="New Field Name">
            </div>
        </div>
        <br>

        <!-- repository links -->
        <!-- not mandatory -->
        <div id="dev_links" class="links">
            <h3 class="links_heading">Dev Account Links</h3>  <span class="links_decoration"></span>
            <div class="all_inputs">
                <div class="input_container">
                    <label>Facebook Account Link:</label>	<input type="text" name="Dev_links[]">
                </div><br>
                <div class="input_container">
                    <label>Codeforces Account Link:</label>	<input type="text" name="Dev_links[]">
                </div><br>
            </div>
            <div class="add_butt_container">
                <button value="" type="button" class="add_field"> Add New Field </button>
                <input class="butt_name" type="text" placeholder="New Field Name">
            </div>
        </div>
        <br><br>

        <!-- previous work -->
        <!-- not mandatory -->
        <div id="site_links" class="links">
            <h3 class="links_heading">Links To Sites/Repositories You've Worked On</h3>  <span class="links_decoration"></span>
            <div class="all_inputs">
                <div class="input_container">
                    <label>Website Link:</label>	<input type="text" name="site_links[]">
                </div><br>
            </div>

            <div class="add_butt_container">
                <button value="" type="button" class="add_field"> Add New Field </button>
                <input value="" type="text" class="butt_name" placeholder="New Field Name">
            </div>
        </div>
        <br><br>

        <!-- volunteer skills and the fields he/she wants to contribute to -->
        <!-- mandatory -->
        <div class="skills">
            <h3 class="links_heading">Your Skills/Sectors You Want To Contribute To </h3>
            <div class="skills_container">
                <div class="dev_skill_container container">
                    <input class="dev_skill skill" type="checkbox" value="developer" name="skills[]">Developer<br>
                    <div class="platforms_container hide">

                        <div class="platform_container container">
                            <input class="web_platform platform" type="checkbox" value="web_develoeper" name="platforms[]">Web Dev<br>
                            <div class="langs_container hide">

                                <div class="lang_container container">
                                    <input class="JS_lang lang" type="checkbox" value="javascript" name="langs[]">Javascript<br>
                                    <div class="frames_container container hide">
                                        <input class="react_frame frame" type="checkbox" value="react" name="frames[]">React<br>
                                        <input class="angular_frame frame" type="checkbox" value="angular" name="frames[]">Angular<br>
                                        <input class="meteor_frame frame" type="checkbox" value="meteor" name="frames[]">Meteor<br>
                                    </div>
                                </div>

                                <div class="lang_container container">
                                    <input class="CSS_lang lang" type="checkbox" value="css" name="langs[]">CSS<br>
                                    <div class="CSS_frames_container container hide">
                                        <!-- CSS frame -->
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="platform_container container">
                            <input class="android_platform platform" type="checkbox" value="android_develoeper" name="platforms[]">Android Deve<br>
                            <div class="langs_container hide">

                                <div class="lang_container container">

                                    <input class="java_lang lang" type="checkbox" value="java" name="langs[]">Java<br>
                                    <div class="java_frames_container container hide">
                                        <!-- java frames -->
                                    </div>

                                </div>
                            </div>
                                </div>

                        <div class="platform_container container">

                            <input class="windows_platform platform" type="checkbox" value="windows_develoeper" name="platforms[]">windows Dev<br>
                            <div class="langs_container hide">

                                <div class="lang_container container">
                                    <input class="cpp_lang lang" type="checkbox" value="cpp" name="langs[]">C++/C<br>
                                    <div class="frames_container container hide">
                                        <input class="qt_frame frame" type="checkbox" value="qt" name="frames[]">Qt<br>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="platform_container container">

                            <input class="ios_platform platform" type="checkbox" value="ios_develoeper" name="platforms[]">iOS Deve<br>
                            <div class="langs_container hide">

                                <div class="lang_container container">
                                    <input class="swift_lang lang" type="checkbox" value="swift" name="langs[]">Java<br>
                                    <div class="frames_container container hide">
                                        <!-- java frames -->
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="platform_container container">

                            <input class="server_platform platform" type="checkbox" value="server_develoeper" name="platforms[]">Server Side<br>
                            <div class="langs_container hide">

                                <div class="lang_container container">
                                    <input class="python_lang lang" type="checkbox" value="python" name="langs[]">Python<br>
                                    <div class="frames_container container hide">
                                        <input class="django_frame frame" type="checkbox" value="django" name="frames[]">django<br>
                                    </div>
                                </div>

                                <div class="lang_container container">
                                    <input class="php_lang lang" type="checkbox" value="php" name="langs[]">PHP<br>
                                    <div class="frames_container container hide">
                                        <input class="laravel_frame frame" type="checkbox" value="laravel" name="frames[]">laravel<br>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>

                <div class="recorder_skill_container container">
                    <input class="recorder_skill skill" type="checkbox" value="recorder" name="skills[]">Recorder<br>
                </div>

                <div class="ui_skill_container container">
                    <input class="ui_skill skill" type="checkbox" value="ui_developer" name="skills[]">UI developer<br>
                    <div class="platforms_container container hide">

                        <div class="platform_container container">
                            <input class="whole_app_platform platform" type="checkbox" value="whole_app_design" name="platforms[]">Whole App Design<br>
                        </div>

                        <div class="platform_container container">
                            <input class="font_design_platform platform" type="checkbox" value="font_design" name="platforms[]">Font design<br>
                        </div>

                        <div class="platform_container container">
                            <input class="icon_platform platform" type="checkbox" value="icon_design" name="platforms[]">Icon design<br>
                        </div>

                        <div class="platform_container container">
                            <input class="image_platform platform" type="checkbox" value="image_design" name="platforms[]">Image design<br>
                        </div>
                    </div>
                </div>

                <div class="content_develop_skill_container container">
                    <input class="content_develop_skill skill" type="checkbox" value="ui_developer" name="skills[]">content developer<br>
                    <div class="platforms_container container hide">

                        <div class="platform_conainer container">
                            <input class="video_platform platform" type="checkbox" value="video_content" name="platform[]">video content<br>
                        </div>

                        <div class="platform_conainer container">
                            <input class="audio_platform platform" type="checkbox" value="audio_content" name="platform[]">audio content<br>
                        </div>

                        <div class="platform_conainer container">
                            <input class="image_platform platform" type="checkbox" value="image_content" name="platform[]">image content<br>
                        </div>

                    </div>
                </div>

            </div>

            <!-- add a field to add multiple skills -->
        </div>
        <br><br>


        <input class="submit_button" type="submit" value="submit" name="submit">


    </form>
</div>


</body>







<!--
    	<div class="input_container">
    		<label>Name:</label>			<input type="text" name="name">
    	</div>
    	<br>
    	
    	<div class="input_container">
    		<label>E-mail</label>			<input type="text" name="E-mail">
    	</div>
    	<br>
    	
    	<div class="input_container">
    		<label>Address</label>			<input type="text" name="address">
    	</div>
    	<br>
    	
    	<div class="input_container">
    		<label>Contact Number:</label>	<input type="text" name="contact">
    	</div>
    	
    	<br>
-->

<!--
<div class="dev_type_main_container container">
							<input class="dev_type_main" type="checkbox" value="developer" name="type_main[]">Developer<br>
							<div class="dev_container type_main container">
								<input class="web_dev type" type="checkbox" value="web_developer" name="type[]">Web Developer<br>
								<div class="web_developer type container">
									<div class="user_side container">

										<div class="JS_container container">
											<input type="checkbox" class="JS_lang lang">Javascript<br>
											<div class="JS_frames frames">
												<input type="checkbox" value="react" name="frames[]">React<br>
												<input type="checkbox" value="angular" name="frames[]">Angular<br>
												<input type="checkbox" value="ember" name="frames[]">Ember<br>
												<input type="checkbox" value="meteor" name="frames[]">Meteor<br>
											</div>
										</div>

										<div class="CS_container container">
											<input type="checkbox">CSS3<br>
										</div>

									</div>
								</div>
								<input class="server_developer type_container">
									<div class="server_side container">

										<div class="python_container container">
											<input class="pyhton_lang lang" type="checkbox" value="python">Python<br>
											<div class="py_frames frames">
												<input type="checkbox" value="django" name="frames[]">Django<br>
											</div>
										</div>

										<div class="PHP_container container">
											<input type="checkbox" class="PHP_lang lang" value="php">PHP<br>
											<div class="PHP_frames frames">
												<input type="checkbox" value="laravel" name="frames[]">Laravel<br>
											</div>
										</div>
									</div>
								<div class="recorder">

								</div>
								<div class="UI">

								</div>
								-->
