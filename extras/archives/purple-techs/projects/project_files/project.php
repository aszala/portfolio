<?php
	$project_name = str_replace(' ', '_', strtolower($_GET['project']));

	if ($project_name == 'not_ready') {
		header("Location: not_ready.html");
		die();
	}

	$data = file_get_contents("data/" . $project_name . ".json");

	$json_data = json_decode($data);

	$gallery_location = "data/gallery/" . $project_name . "/";

	$project_title = $json_data->title;
	$objective = $json_data->objective;
	$results = $json_data->results;
	$learned = $json_data->learned;
	$last_updated = $json_data->updated;

	$files = array_filter(glob("data/*"), 'is_file');

	natsort($files);

	$previous = "yeet";
	$next = "yeet";

	for ($x = 0; $x < count($files); $x++) {
		$file_name = str_replace('.json', '', str_replace('data/', '', str_replace(' ', '_', strtolower($files[$x]))));

		if ($file_name == $project_name) {
			if ($x == 0) {
				$previous = str_replace('.json', '', str_replace('data/', '', str_replace('_', ' ', $files[count($files) - 1])));
				$next = str_replace('.json', '', str_replace('data/', '', str_replace('_', ' ', $files[$x + 1])));
			} else if ($x == count($files)-1) {
				$next = str_replace('.json', '', str_replace('data/', '', str_replace('_', ' ', $files[0])));
				$previous = str_replace('.json', '', str_replace('data/', '', str_replace('_', ' ', $files[$x - 1])));
			} else {
				$previous = str_replace('.json', '', str_replace('data/', '', str_replace('_', ' ', $files[$x - 1])));
				$next = str_replace('.json', '', str_replace('data/', '', str_replace('_', ' ', $files[$x + 1])));
			}
		}
	}

	if ($next == "") {
		$next = 'game engine';
	}

	if ($previous == "") {
		$previous = "space raiders";
	}

	$images = glob($gallery_location . '*');

	$html_gallery_insert = "";

	for ($i = 0; $i < count($images); $i++) {
		if ($i == 1 || $i == 0) {
			continue;
		} else {
			if (file_exists(($gallery_location . ($i+1) . '.png'))) {
				$html_gallery_insert .= "<div class='gallery-image-container'><img src='" . ($gallery_location . ($i+1) . '.png') . "' class='gallery-image'></div>";
			}
		}
	}

?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title><?php echo $project_title; ?></title>
		<link rel="stylesheet" href="../../global/global.css">
		<link rel="stylesheet" href="project.css">
		<link rel="shortcut icon" href="../../favicon.ico" />
	</head>
	<body>
		<div id="page-cover"></div>
		<div id="navbar">
			<div id="navbar-container" class="flex-row">
				<div id="name-container">
					<div id="name" class="noselect">
						<img src="../../logo.png" alt="logo" onclick="openLink('../../index.html');">
					</div>
				</div>
				<div id="menu" class="flex-row">
					<div id="menu-items" class="flex-row">
						<div class="menu-item underline-container" onclick="openLink('../../index.html');">
							<div class="noselect">home</div>
							<div class="underline"></div>
						</div>
						<div class="menu-item underline-container" onclick="openLink('../projects.html');">
							<div class="noselect">projects</div>
							<div class="underline"></div>
						</div>
						<div class="menu-item underline-container" onclick="openLink('../../about/about.html');">
							<div class="noselect">about</div>
							<div class="underline"></div>
						</div>
					</div>
					<div id="menu-button-container">
						<div id="menu-container" class="noselect flex-row">
							<div id="menu-button" class="noselect">
								menu
							</div>
							<div id="menu-bars" class="noselect flex-row">
								<div class="menu-bar 1"></div>
								<div class="menu-bar 2"></div>
								<div class="menu-bar 3"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="navbar-dropdown">
			<div id="dropdown-container">
				<div id="dropdown-menu-items" class="flex-row">
					<div class="menu-item underline-container" onclick="openLink('../../index.html');">
						<div class="noselect">home</div>
						<div class="underline"></div>
					</div>
					<div class="menu-item underline-container" onclick="openLink('../projects.html');">
						<div class="noselect">projects</div>
						<div class="underline"></div>
					</div>
					<div class="menu-item underline-container" onclick="openLink('../../about/about.html');">
						<div class="noselect">about</div>
						<div class="underline"></div>
					</div>
				</div>
			</div>
		</div>
		<div id="header">
			<div id="title">
				<?php echo $project_title; ?>
				<div id="last-updated">Updated: <?php echo $last_updated ?></div>
			</div>
		</div>
		<br><br><br><br>
		<div class="section flex-center">
			<div id="project-information">
				<div class="project-section">
					<div class="project-section-title">
						Project objective
						<hr class="semi-underline">
					</div>
					<div class="project-section-content">
						<?php echo $objective; ?>
					</div>
				</div>
				<div class="project-section">
					<div class="project-section-title">
						Project results
						<hr class="semi-underline">
					</div>
					<div class="project-section-content">
						<?php echo $results; ?>
					</div>
				</div>
				<div class="project-section">
					<div class="project-section-title">
						What did I learn?
						<hr class="semi-underline">
					</div>
					<div class="project-section-content">
						<?php echo $learned; ?>
					</div>
				</div>
			</div>
			<div id="project-images">
				<div class="project-image-container">
					<img src="<?php echo $gallery_location . '1.png'; ?>" alt="project-image-1">
				</div>
				<div class="project-image-container">
					<img src="<?php echo $gallery_location . '2.png'; ?>" alt="project-image-2">
				</div>
			</div>
		</div>
		<div id="gallery">
			<?php echo $html_gallery_insert ?>
		</div>
		<br><br>
		<div id="nav-buttons">
			<div class="button" onclick="openLink('project.php?project=<?php echo str_replace(' ', '_', $previous); ?>');">&larr; <?php echo $previous; ?></div>
			<div class="button" onclick="openLink('project.php?project=<?php echo str_replace(' ', '_', $next); ?>');"><?php echo $next; ?>&rarr;</div>
		</div>
		<footer class="section">
			<div id="footer-section-container" class="section-content-container">
				<div id="footer-menu-items" class="flex-center">
					<div class="menu-item underline-container" onclick="openLink('../../index.html');">
						<div class="noselect">home</div>
						<div class="underline"></div>
					</div>
					<div class="menu-item underline-container" onclick="openLink('../projects.html');">
						<div class="noselect">projects</div>
						<div class="underline"></div>
					</div>
					<div class="menu-item underline-container" onclick="openLink('../../about/about.html');">
						<div class="noselect">about</div>
						<div class="underline"></div>
					</div>
				</div>
				<br>
				<div id="social-media-container" class="flex-center">
					<div id="social-media-content">
						<div id="email-phone">
							<div id="phone">&phone; 919-656-7462</div>
							<div id="email">&#9993; zala.abhay@gmail.com</div>
						</div>
						<div id="social-media" class="flex-center">
							<img src="../../imgs/linkedin.png" onclick="openLink('https://www.linkedin.com/in/aszala/');" alt="linkedin aszala">
							<img src="../../imgs/instagram.png" onclick="openLink('https://www.instagram.com/abhay_zala_/');" alt="instagram aszala">
							<img src="../../imgs/github.png" onclick="openLink('https://www.github.com/aszala');" alt="github aszala">
						</div>
					</div>
				</div>
			</div>
		</footer>
		<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
		<script type="text/javascript" src="../../global/global.js" charset="utf-8"></script>
		<script type="text/javascript" src="project.js" charset="utf-8"></script>
	</body>
</html>
