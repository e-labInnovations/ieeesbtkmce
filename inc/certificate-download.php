<?php 

require_once IEEESBTKMCE_THEME_PATH . '/inc/fpdf/fpdf.php';
require_once IEEESBTKMCE_THEME_PATH . '/inc/fpdi/src/autoload.php';

// FPDF code for generating the certificate
// $pdf = new FPDF();
// $pdf->AddPage();
// $pdf->SetFont('Arial', 'B', 16);
// $pdf->Cell(40, 10, get_query_var('certificate-download'));
// $pdf->Output('certificate.pdf', 'I'); // 'D' will force a download

$pdf = new \setasign\Fpdi\Fpdi();

$pagecount = $pdf->setSourceFile(IEEESBTKMCE_THEME_PATH . '/inc/template_1.pdf');
$pageId = $pdf->importPage(1, \setasign\Fpdi\PdfReader\PageBoundaries::MEDIA_BOX);

$templateSize = $pdf->getImportedPageSize($pageId);
// print_r($templateSize);

$pdf->addPage($templateSize["orientation"], $templateSize);

$pdf->useImportedPage($pageId, 0, 0);

// $pdf->SetFont('Arial', 'B', 24);
// $pdf->Text(90, 60, 'Muhammed Risal');
// $pdf->SetFont('Arial', 'B', 32);
// $pdf->Text(91.72208209126347, 58.91379888169615, 'Muhammed Risal');
// $pdf->Image('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example', 20, 150, 30, 0, 'PNG');
$pdf->SetFont('Arial', 'B', 29.279065435071413);
$pdf->SetTextColor(5,25,45);
$pdf->Text(91.37520000000004, 59.65063331696241, 'Hello Fabric.js!');

$pdf->Image('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example', 50.79327640490023, 153.44573695331547, 26.82272359509977, 26.82272359509977, 'PNG');

// print_r($pdf->useImportedPage($pageId));
//Array ( [width] => 317.5 [height] => 183.134 [0] => 317.5 [1] => 183.134 [orientation] => L )

$pdf->SetTitle("Certificate Title Here");
$pdf->SetAuthor('IEEE SB TKMCE');
$pdf->Output('I', 'generated.pdf');