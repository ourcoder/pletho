<?php include('/var/sites/p/pletho.com/adminState.php'); $adminstate = $adminState; ?>
<?php if (strpos($adminstate,'false') !== false) { ?>
OFFLINE
<?php	 } else { 
include('../index.php'); 
}  ?>
