import jsPDF from "jspdf"
import "jspdf-autotable"
import { format } from "date-fns"


const generatePDF = (foodListings, giver) => {
    console.log(foodListings, "generate report")

    const monthlyListing = [...foodListings]
    .filter( listing => {
      return new Date(`${listing.start_time}`).toLocaleString('en-US', {month: 'long'}) === new Date().toLocaleString('en-US', {month: 'long'}) })
 
  const doc = new jsPDF()
 

  const tableColumn = ["Id", "Name", "Description"," Amount", "Date"]

  // define an empty array of rows
  const tableRows = []

  // for each ticket pass all its data into an array
  monthlyListing.forEach(listing => {
    const dateListed = new Date(`${listing.created_at}`).toLocaleString('en-US', {month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })
    const listingData = [
      listing.id,
      listing.name,
      listing.description,
      listing.amount,
      dateListed
    //   format(new Date(ticket.updated_at), "yyyy-MM-dd")
    ]
  
    tableRows.push(listingData)
  })

 doc.setDrawColor(150,150,150)

  doc.autoTable(tableColumn, tableRows, { startY: 40 })
  const date = Date().split(" ");
//   // we use a date string to generate our filename.
  const dateStr = `${date[1]} ${date[3]}`;

  doc.setFontSize(18);
  doc.text(`Food For Thought`, 14, 15)
  doc.setFontSize(16);
  doc.text(`${giver.name}`, 14, 25)
  doc.setFontSize(12);
  doc.text(`${giver.location}`, 195, 35, null, null, "right")
  doc.setFontSize(12);
  doc.text(`Food Donations for the month of ${dateStr}`, 14, 35)

   const bottomText = "No goods or services were provided in exchange for this contribution. Food For Thought is an exempt organization as described in Section 501(c)(3) of the Internal Revenue Code."
  
  // doc.setFontSize(12);
  // doc.text(bottomText, 14, 300)
 
  doc.save(`report_${dateStr}.pdf`)
};

export default generatePDF