<?php
$handle = fopen("feedback/contact.txt", "a");
foreach($_POST as $variable => $value) {
   fwrite($handle, $variable);
   fwrite($handle, "=");
   fwrite($handle, $value);
   fwrite($handle, "\r\n");
}
fwrite($handle, "\r\n");
fclose($handle);
header ('Location: http://www.lazeez-e-niyaz.com');
exit;
?>