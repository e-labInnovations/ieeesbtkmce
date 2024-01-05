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

$pdf->SetFont('Arial', 'B', 24);
// $pdf->Text(90, 60, 'Muhammed Risal');
$pdf->Text($templateSize["width"]*0.06444444444444444, $templateSize["height"]*0.11175337186897881, 'Muhammed Risal');

// Insert a logo in the top-left corner at 300 dpi
// $pdf->Image('logo.png', 10, 10, -300);
// // Insert a dynamic image from a URL
$pdf->Image('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example', 20, 150, 30, 0, 'PNG');

// print_r($pdf->useImportedPage($pageId));
//Array ( [width] => 317.5 [height] => 183.134 [0] => 317.5 [1] => 183.134 [orientation] => L )

$pdf->Output('I', 'generated.pdf');