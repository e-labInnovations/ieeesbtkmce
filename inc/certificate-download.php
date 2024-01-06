<?php 

require_once IEEESBTKMCE_THEME_PATH . '/inc/fpdf/fpdf.php';
require_once IEEESBTKMCE_THEME_PATH . '/inc/fpdi/src/autoload.php';

$pdf = new \setasign\Fpdi\Fpdi();

$pagecount = $pdf->setSourceFile(IEEESBTKMCE_THEME_PATH . '/inc/template_1.pdf');
$pageId = $pdf->importPage(1, \setasign\Fpdi\PdfReader\PageBoundaries::MEDIA_BOX);

$templateSize = $pdf->getImportedPageSize($pageId);
// print_r($templateSize);

$pdf->addPage($templateSize["orientation"], $templateSize);

$pdf->useImportedPage($pageId, 0, 0);

$pdf->SetFont('Arial', 'B', 31);
$pdf->SetTextColor(5,25,45);
$pdf->Text(90.5928902817637, 58.925805310537875, 'Hello Fabric.js!');

$pdf->Image('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://elabins.com', 46.92240000000001, 150.2834339102429, 29.091133190861754, 29.091133190861754, 'PNG');

// print_r($pdf->useImportedPage($pageId));
//Array ( [width] => 317.5 [height] => 183.134 [0] => 317.5 [1] => 183.134 [orientation] => L )

$pdf->SetTitle("Certificate Title Here");
$pdf->SetAuthor('IEEE SB TKMCE');
$pdf->Output('I', 'generated.pdf');