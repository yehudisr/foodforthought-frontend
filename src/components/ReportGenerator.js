import jsPDF from "jspdf"
import "jspdf-autotable"
import { format } from "date-fns"


const generatePDF = (foodListings, giver) => {
    console.log(foodListings)
 
  const doc = new jsPDF()
 

  const tableColumn = ["Id", "Name", "Description"]
  // define an empty array of rows
  const tableRows = []

  // for each ticket pass all its data into an array
  foodListings.forEach(listing => {
    const listingData = [
      listing.id,
      listing.name,
      listing.description,
      // listing.amount,
    
    //   format(new Date(ticket.updated_at), "yyyy-MM-dd")
    ]
  
    tableRows.push(listingData)
  })



  doc.autoTable(tableColumn, tableRows, { startY: 40 })
  const date = Date().split(" ");
//   // we use a date string to generate our filename.
  const dateStr = `${date[1]} ${date[3]}`;
//   // ticket title. and margin-top + margin-left
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
 
  doc.save(`report.pdf`)
};

export default generatePDF