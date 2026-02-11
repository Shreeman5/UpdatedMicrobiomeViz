// Renders Visualization and Legend for tab 2
class Tab2Viz{

    static Tab2VizRootName
    static Tab2VizData
    static Tab2SelectedButtons

    constructor(sliderMin, sliderMax, rootName, selectedOptions, structureData, classNames, selectedRemovals, tab2Boolean){
        this.sliderMin = sliderMin
        this.sliderMax = sliderMax
        this.rootName = rootName
        this.selectedOptions = selectedOptions
        this.structureData = structureData
        // console.log(this.structureData)
        this.classNames = classNames
        Tab2Viz.Tab2VizRootName = rootName
        this.selectedRemovals = selectedRemovals
        this.tab2Boolean = tab2Boolean
    }

    renderMainLegend(){
        let svg = d3.select(".dynamic-div-x" ).append("svg")
        .attr("width", 2960)
        .attr("height", 430)

        svg.append("text")
        .attr("x", 0)
        .attr("y", 50)
        .attr("font-size", "58")
        .attr("fill", "Black")
        .text("Important Information For All Visualizations")

        svg.append("text")
        .attr("x", 0)
        .attr("y", 120)
        .attr("font-size", "38")
        .attr("fill", "Black")
        .text("Picking at least one action will render 5 visualizations below: 3 sunbursts in the top row, 2 radial bars in the middle row.")

        svg.append("text")
        .attr("x", 0)
        .attr("y", 170)
        .attr("font-size", "38")
        .attr("fill", "Black")
        .text("In the first row, Go Up Hierarchy using")


        svg.append("circle")
        .attr("cx", 675)
        .attr("cy", 155)  
        .attr("r", 20) 
        .attr("fill", "black") 

        svg.append("text")
        .attr("x", 705)
        .attr("y", 170)
        .attr("font-size", "38")
        .attr("fill", "Black")
        .text("Current Root is also indicated by")

        svg.append("circle")
        .attr("cx", 1285)
        .attr("cy", 155)  
        .attr("r", 20) 
        .attr("fill", "black") 

        svg.append("text")
        .attr("x", 1315)
        .attr("y", 170)
        .attr("font-size", "38")
        .attr("fill", "Black")
        .text("This is 'zooming out'.")


        svg.append("text")
        .attr("x", 0)
        .attr("y", 220)
        .attr("font-size", "38")
        .attr("fill", "Black")
        .text("In the first row, click on any node in one of the 3 sunbursts to make that node root. This is 'zooming in'.")

        svg.append("text")
        .attr("x", 0)
        .attr("y", 270)
        .attr("font-size", "38")
        .attr("fill", "Black")
        .text("The root and it's children are shown in all the 5 diagrams. Therefore, zooming in or out will change the diagrams.")

        let renderVal = Tab2Viz.Tab2VizRootName.split('__')
        svg.append("text")
        .attr("x", 0)
        .attr("y", 320)
        .attr("font-size", "38")
        .attr("fill", "Black")
        .text("Current Root = " + renderVal[1] + "[" + nameMapping(renderVal[0]) + "]")

        svg.append("text")
        .attr("x", 0)
        .attr("y", 370)
        .attr("font-size", "38")
        .attr("fill", "Black")
        .text("Bacteria needs to be the root of the hierarchy for the checkboxes functionality to be used. Checkboxes can affect all the 5 diagrams.")

        svg.append("text")
        .attr("x", 0)
        .attr("y", 420)
        .attr("font-size", "38")
        .attr("fill", "Black")
        .text("The slider below only affects the sunbursts of the first row. Additionally, each row has its own legend on the left.")
    }

    renderLegendOfFirstRow(){
        let svg = d3.select(".dynamic-div-x2" ).append("svg")
        .attr("width", 760)
        .attr("height", 1070)

        svg.append("text")
            .attr("x", 542)
            .attr("y", 120)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text(("Low Abundance of Organism"))

        const gradient = svg.append("defs")
            .append("linearGradient")
            .attr("id", "gradient")
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "100%")
            .attr("y2", "0%");

        gradient.append("stop")
            .attr("offset", "0%")
            .attr("stop-color", "#0200b9")
            .attr("stop-opacity", 1);

        gradient.append("stop")
                .attr("offset", "100%")
                .attr("stop-color", "#00fff3")
                .attr("stop-opacity", 1);

        svg.append("rect")
            .attr("x", 552)   
            .attr("y", 90)    
            .attr("width", 200) 
            .attr("height", 30) 
            .attr("fill", "url(#gradient)")
            .attr("stroke", "black")
            .attr("stroke-width", "1")

        svg.append("text")
        .attr("x", 552)
        .attr("y", 150)
        .attr("font-size", "38")
        .attr("fill", "Black")
        .text("0")

        svg.append("text")
        .attr("x", 752)
        .attr("y", 150)
        .attr("font-size", "38")
        .attr("fill", "Black")
        .attr("text-anchor", "end")
        .text((this.sliderMin).toFixed(0))

        svg.append("text")
            .attr("x", 542)
            .attr("y", 190)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text(("Normal Abundance of Organism"))


        svg.append("rect")
            .attr("x", 552)  
            .attr("y", 160)   
            .attr("width", 200) 
            .attr("height", 30) 
            .attr("fill", "purple")
            .attr("stroke", "black")
            .attr("stroke-width", "1")

        svg.append("text")
            .attr("x", 552)
            .attr("y", 220)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .text((this.sliderMin).toFixed(0))

        svg.append("text")
            .attr("x", 752)
            .attr("y", 220)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text((this.sliderMax).toFixed(0))

        svg.append("text")
            .attr("x", 542)
            .attr("y", 260)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text(("High Abundance of Organism"))

        const gradient2 = svg.append("defs")
            .append("linearGradient")
            .attr("id", "gradient2")
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "100%")
            .attr("y2", "0%");

        gradient2.append("stop")
            .attr("offset", "0%")
            .attr("stop-color", "#ff0000")
            .attr("stop-opacity", 1);

        gradient2.append("stop")
                .attr("offset", "100%")
                .attr("stop-color", "#7b0000")
                .attr("stop-opacity", 1);

        svg.append("rect")
            .attr("x", 552)  
            .attr("y", 230)    
            .attr("width", 200) 
            .attr("height", 30) 
            .attr("fill", "url(#gradient2)") 
            .attr("stroke", "black")
            .attr("stroke-width", "1")

        svg.append("text")
            .attr("x", 552)
            .attr("y", 290)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .text((this.sliderMax).toFixed(0))

        svg.append("text")
            .attr("x", 752)
            .attr("y", 290)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text("100")

        svg.append("text")
            .attr("x", 542)
            .attr("y", 330)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text("LIO = Low-Indicator Organism")

        const gradient3 = svg.append("defs")
            .append("linearGradient")
            .attr("id", "gradient3")
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "100%")
            .attr("y2", "0%");

        gradient3.append("stop")
            .attr("offset", "0%")
            .attr("stop-color", "#d2691e")
            .attr("stop-opacity", 1);

        gradient3.append("stop")
                .attr("offset", "100%")
                .attr("stop-color", "#d2691e")
                .attr("stop-opacity", 1);
            
        svg.append("rect")
            .attr("x", 552)   
            .attr("y", 300)   
            .attr("width", 200) 
            .attr("height", 30) 
            .attr("fill", "url(#gradient3)") 
            .attr("stroke", "black")
            .attr("stroke-width", "1")

        svg.append("text")
            .attr("x", 542)
            .attr("y", 400)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text("HIO = High-Indicator Organism")

        const gradient4 = svg.append("defs")
            .append("linearGradient")
            .attr("id", "gradient4")
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "100%")
            .attr("y2", "0%");

        gradient4.append("stop")
            .attr("offset", "0%")
            .attr("stop-color", "#003300")
            .attr("stop-opacity", 1);

        gradient4.append("stop")
                .attr("offset", "100%")
                .attr("stop-color", "#003300")
                .attr("stop-opacity", 1);
            
        svg.append("rect")
            .attr("x", 552)    
            .attr("y", 370)    
            .attr("width", 200)
            .attr("height", 30) 
            .attr("fill", "url(#gradient4)") 
            .attr("stroke", "black")
            .attr("stroke-width", "1")
    }



    renderLegendofSecondRow(donutArray, barcodeArray){

   

    let width = 600;
    let height = 600;
    let svg = d3.select(".dynamic-div-x3").append("svg")
        .attr("width", width)
        .attr("height", height);

    // Add clickable link to another page
    const linkGroup = svg.append("g")
        .style("cursor", "pointer")
        .on("click", function() {
            window.location.href = "page2.html"; // Change this to your target HTML file
        });

    // Add background rectangle for the link (optional, for better visibility)
    linkGroup.append("rect")
        .attr("x", width - 210)
        .attr("y", 20)
        .attr("width", 200)
        .attr("height", 40)
        .attr("fill", "white")
        .attr("stroke", "#333")
        .attr("stroke-width", 2)
        .attr("rx", 5);

    // Add link text
    linkGroup.append("text")
        .attr("x", width - 110)
        .attr("y", 52)
        .attr("text-anchor", "middle")
        .attr("font-size", "35px")
        .attr("font-weight", "bold")
        .attr("fill", "black")
        .text("Tutorial");

    // Define colors for x-axis categories
    const colors = ["rgb(210, 215, 255)", "rgb(255, 200, 200)", "darkred"]; // light blue, light red, dark red
    const colorLabels = ["Light Blue", "Light Red", "Dark Red"];

    // Define arc sizes for y-axis categories (reversed: big to small)
    // CHANGE ARC LENGTH HERE: Modify the angle values (in radians, where Math.PI = 180 degrees)
    const arcSizes = [
        { inner: 57, outer: 103, angle: Math.PI * 0.15, label: "Big Arc" },      // 216 degrees
        { inner: 57, outer: 103, angle: Math.PI * 0.3, label: "Medium Arc" },   // 144 degrees
        { inner: 57, outer: 103, angle: Math.PI * 0.4, label: "Small Arc" }     // 72 degrees
    ];

    // Grid layout settings
    const gridCols = 3;
    const gridRows = 3;
    const marginLeft = 40;
    const marginBottom = 120;
    const gridWidth = width - marginLeft - 80;
    const gridHeight = height - marginBottom - 80;
    const cellWidth = gridWidth / gridCols;
    const cellHeight = gridHeight / gridRows;

    // Draw axes
    svg.append("line")
        .attr("x1", marginLeft)
        .attr("y1", 150)
        .attr("x2", marginLeft)
        .attr("y2", 100 + gridHeight)
        .attr("stroke", "#333")
        .attr("stroke-width", 3);

    svg.append("line")
        .attr("x1", marginLeft)
        .attr("y1", 100 + gridHeight)
        .attr("x2", marginLeft + gridWidth)
        .attr("y2", 100 + gridHeight)
        .attr("stroke", "#333")
        .attr("stroke-width", 3);

    // Create arcs in grid
    for (let row = 0; row < gridRows; row++) {
        for (let col = 0; col < gridCols; col++) {
            const x = marginLeft + cellWidth * (col + 0.5) - 60;
            const y = 100 + cellHeight * (row + 0.5) - 60;
            const key = `${row}-${col}`;
            
            // Create arc generator
            const arc = d3.arc()
                .innerRadius(arcSizes[row].inner)
                .outerRadius(arcSizes[row].outer)
                .startAngle(Math.PI)  // Start at 6 o'clock
                .endAngle(Math.PI / 2 + arcSizes[row].angle);  // Go counter-clockwise
            
            // Add arc
            svg.append("path")
                .attr("d", arc)
                .attr("transform", `translate(${x}, ${y})`)
                .attr("fill", colors[col])
                .attr("stroke", "#333")
                .attr("stroke-width", 2);

        }
    }










    // Add x-axis label (color gradient rectangle)
    // Two-Rectangle Gradient System
const blueRectWidth = 100;  // Blue rectangle width
const redRectWidth = 200;   // Red rectangle width (2x blue)
const rectHeight = 40;
const spacing = 10;
const startX = marginLeft + 15;
const startY = 100 + gridHeight + 38;

// Blue "Healthy" rectangle
svg.append("rect")
    .attr("x", startX)
    .attr("y", startY - 20)
    .attr("width", blueRectWidth)
    .attr("height", rectHeight)
    .attr("fill", "rgb(210, 215, 255)")
    .attr("stroke", "#333")
    .attr("stroke-width", 2);

svg.append("text")
    .attr("x", startX + blueRectWidth / 2)
    .attr("y", startY + rectHeight / 2 + 7 - 20)
    .attr("text-anchor", "middle")
    .attr("font-size", "30px")
    .attr("font-weight", "600")
    .attr("fill", "#2c3e50")
    .text("None");

// Gradient definition for red rectangle
const redGradient = svg.append("defs")
    .append("linearGradient")
    .attr("id", "redGradient")
    .attr("x1", "0%")
    .attr("x2", "100%");

redGradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "rgb(255, 200, 200)");

redGradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "darkred");

// Red gradient rectangle
svg.append("rect")
    .attr("x", startX + blueRectWidth + spacing + 50)
    .attr("y", startY - 20)
    .attr("width", redRectWidth + 60)
    .attr("height", rectHeight)
    .attr("fill", "url(#redGradient)")
    .attr("stroke", "#333")
    .attr("stroke-width", 2);

// "Low" label on left side of red rectangle
svg.append("text")
    .attr("x", startX + blueRectWidth + spacing + 53)
    .attr("y", startY + rectHeight / 2 + 7 - 20)
    .attr("font-size", "30px")
    .attr("font-weight", "600")
    .attr("fill", "#2c3e50")
    .text("Low");

// "High" label on right side of red rectangle
svg.append("text")
    .attr("x", startX + blueRectWidth + spacing + redRectWidth - 20 + 130)
    .attr("y", startY + rectHeight / 2 + 7 - 20)
    .attr("text-anchor", "end")
    .attr("font-size", "30px")
    .attr("font-weight", "600")
    .attr("fill", "white")
    .text("High");









    // Add x-axis arrow
    svg.append("defs").append("marker")
        .attr("id", "arrowX")
        .attr("markerWidth", 10)
        .attr("markerHeight", 10)
        .attr("refX", 9)
        .attr("refY", 3)
        .attr("orient", "auto")
        .append("polygon")
        .attr("points", "0 0, 10 3, 0 6")
        .attr("fill", "#333");

    svg.append("line")
        .attr("x1", marginLeft + gridWidth)
        .attr("y1", 100 + gridHeight)
        .attr("x2", marginLeft + gridWidth + 40)
        .attr("y2", 100 + gridHeight)
        .attr("stroke", "#333")
        .attr("stroke-width", 3)
        .attr("marker-end", "url(#arrowX)");

    svg.append("text")
        .attr("x", (marginLeft + gridWidth)/4)
        .attr("y", startY + rectHeight + 10)
        .attr("text-anchor", "start")
        .attr("font-size", "30px")  // AXIS LABEL SIZE
        .attr("font-weight", "bold")
        .text("Disease Similarity");

    // CHANGE Y-AXIS ARROW HERE: Modify the polygon points and refX/refY values
    // Add y-axis arrow
    svg.append("defs").append("marker")
        .attr("id", "arrowY")
        .attr("markerWidth", 10)
        .attr("markerHeight", 10)
        .attr("refX", 5)       
        .attr("refY", 5)       
        .attr("orient", "0")  // Point upward (270 degrees)
        .append("polygon")
        .attr("points", "5 0, 10 10, 0 10")  // Triangle pointing right (will be rotated)
        .attr("fill", "#333");

    svg.append("line")
        .attr("x1", marginLeft)
        .attr("y1", 150)
        .attr("x2", marginLeft)
        .attr("y2", 110)
        .attr("stroke", "#333")
        .attr("stroke-width", 3)
        .attr("marker-end", "url(#arrowY)");

    // Y-axis label - "Literature" (top line)
    svg.append("text")
        .attr("x", 0)  // Position at middle of shortened axis
        .attr("y", 45)  // Distance from left edge
        .attr("text-anchor", "start")
        .attr("font-size", "30px")  // AXIS LABEL SIZE
        .attr("font-weight", "bold")
        // .attr("transform", "rotate(-90)")  // Rotate 90 degrees counterclockwise
        .text("Literature");

    // Y-axis label - "Evidence" (bottom line)
    svg.append("text")
        .attr("x", 0)  // Same position
        .attr("y", 80)  // Slightly further from left edge
        .attr("text-anchor", "start")
        .attr("font-size", "30px")  // AXIS LABEL SIZE
        .attr("font-weight", "bold")
        // .attr("transform", "rotate(-90)")  // Rotate 90 degrees counterclockwise
        .text("Evidence");
}

    // renders legend
    renderLegend(){
        this.renderMainLegend()
        this.renderLegendOfFirstRow()
        // this.renderLegendofSecondRow()

        
    }

    // handles mouseover event for the visualizations in the second row
    handleMouseOver2(event, p, fileIndex, presentTaxons, cdfandabundanceData, transformedData3){

        const hoveredPathId = "path-" + p.data.organism
    
        d3.selectAll(".sunburst-path")
            .style("stroke", "none")
            .style("stroke-width", 0);
    
    
        d3.selectAll(".sunburst-path")
            .filter(function(d) {
                return this.id === hoveredPathId;
            })
            .style("stroke", "black")
            .style("stroke-width", 10);

        let mytext, cdf, abundance
        if (fileIndex === 5){
            let substringBeforeUnderscore
            for (let i = 0; i < presentTaxons.length; i++){
                let nodeName = presentTaxons[i]
                let index = nodeName.indexOf('_')
                let taxonRank = nodeName.substring(0, index)

                let lastIndex = nodeName.lastIndexOf('__')
                let firstIndex = nodeName.indexOf('__')
                let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                if (taxonName === p.data.organism){
                    substringBeforeUnderscore = nameMapping(taxonRank);
                }

                cdf = findTaxonCDFbyName(cdfandabundanceData, p.data.organism)
                if (cdf == null){
                    cdf = 0
                }
                
                abundance = findNodeValueByName(cdfandabundanceData, p.data.organism)
                if (abundance == null){
                    abundance = 0
                }
            }
            mytext = 'Name : ' + p.data.organism + "<br>" +
                    'Aggregate Relative Abundance for this disease: ' + ((parseFloat(p.data.abundance) * 100).toFixed(3)) + "%<br>" + 
                    'Sample Relative Abundance for this disease: ' + ((abundance * 100).toFixed(3)) + "%<br>" + 
                    'Aggregate Percentile Value for this disease: ' + ((parseFloat(p.data.cdf) * 100).toFixed(3)) + "%<br>" +
                    'Sample Percentile Value for this disease: ' + ((cdf * 100).toFixed(3)) + "%<br>" +
                    'Literature Weight for this disease: ' + p.data.weight + "<br>" +
                    'Rank : ' + substringBeforeUnderscore + "<br>" +
                    'NCBI Taxon ID: ' + p.data.ncbi_taxon_id + "<br>"
        }
        if (fileIndex === 6){
            let substringBeforeUnderscore
            let substringAfterUnderscore
            for (let i = 0; i < presentTaxons.length; i++){
                let nodeName = presentTaxons[i]
                let index = nodeName.indexOf('_')
                let taxonRank = nodeName.substring(0, index)

                let lastIndex = nodeName.lastIndexOf('__')
                let firstIndex = nodeName.indexOf('__')
                let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                if (taxonName === p.data.organism){
                    substringBeforeUnderscore = nameMapping(taxonRank);
                    substringAfterUnderscore = nodeName.substring(lastIndex+2)
                }
            }
            let cdf = findTaxonCDFbyName(cdfandabundanceData, p.data.organism)
            if (cdf == null){
                cdf = 0
            }
            let myWeight2 = findTaxonWeightbyName(transformedData3, p.data.organism)
            if (myWeight2 !== null && myWeight2 !== '0.0' && myWeight2 !== '-0.0'){
                for (let i = 0; i < myWeight2.length; i++){
                    if (myWeight2[i] < 0){
                        cdf = (Number(cdf) + 0)/2
                    }
                    else if (myWeight2[i] > 0){ 
                        cdf = (Number(cdf) + 1)/2
                    }
                }
            }
            let abundance = findNodeValueByName(cdfandabundanceData, p.data.organism)
            if (abundance == null){
                abundance = 0
            }
            mytext = 'Name : ' + p.data.organism + "<br>" +
                    'Aggregate Relative Abundance for this disease: ' + ((parseFloat(p.data.abundance) * 100).toFixed(3)) + "%<br>" + 
                    'Sample_Future Relative Abundance for this disease: ' + ((abundance * 100).toFixed(3)) + "%<br>" + 
                    'Aggregate Percentile Value for this disease: ' + ((parseFloat(p.data.cdf) * 100).toFixed(3)) + "%<br>" +
                    'Sample_Future Percentile Value for this disease: ' + ((cdf * 100).toFixed(3)) + "%<br>" +
                    'Literature Weight for this disease: ' + p.data.weight + "<br>" +
                    'Rank : ' + substringBeforeUnderscore + "<br>" +
                    'NCBI Taxon ID: ' + substringAfterUnderscore + "<br>"
        }
    
        tooltip.innerHTML = mytext
        tooltip.style.left = `${event.pageX + 5}px`;
        tooltip.style.top = `${event.pageY + 5}px`;
        tooltip.style.visibility = 'visible';
    }

    // handles mouseoout event for the visualizations in the second row
    mouseout2(event, p) {
        d3.selectAll(".sunburst-path").each(function(d, i) {
            var element = d3.select(this);
            element.style("stroke", element.attr("original-stroke"));
            element.style("stroke-width", element.attr("original-stroke-width"));
        });
    
                                        
        const tooltip = document.getElementById('tooltip');
        tooltip.style.visibility = 'hidden';
    }

    // handles mouseover event for the visualizations in the first row
    handleMouseOver(event, fileIndex, p, nodeName, cdfContainerData, transformedData, transformedData3) {

        let myName = p.data.name
        let li = myName.lastIndexOf('__')
        let fi = myName.indexOf('__')
        let hoverName = myName.substring(fi+2, li)
        const hoveredPathId = "path-" + hoverName
    
        
        d3.selectAll(".sunburst-path")
            .style("stroke", "none")
            .style("stroke-width", 0);
    
    
        d3.selectAll(".sunburst-path")
            .filter(function(d) {
                return this.id === hoveredPathId;
            })
            .style("stroke", "black")
            .style("stroke-width", 10);
            
        
        let myVar = p.data.name
        let myNames = myVar.split("__")
        let index = myVar.indexOf("_")
        let substringBeforeUnderscore = ''
        if (index !== -1) {
            substringBeforeUnderscore = nameMapping(myVar.substring(0, index));
        } 
    
        let lastIndex = nodeName.lastIndexOf('__')
        let firstIndex = nodeName.indexOf('__')
        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
        let taxonID = nodeName.substring(lastIndex + 2)

        let cdf = findTaxonCDFbyName(cdfContainerData, taxonName)
        
        if (fileIndex === 2){
            if (cdf === null){
                cdf = '0%'
            }
            else{
                cdf = (parseFloat(cdf) * 100).toFixed(3) + '%'
            }
        }
        if (fileIndex === 3){
            let myWeight = findTaxonWeightbyName(transformedData3, taxonName)
            let myNames = findNamesbyName(transformedData3, taxonName)
            let myChange = []
            let myChange2 = []

            if (cdf !== null && myWeight !== null){
                for (let i = 0; i < myWeight.length; i++){
                    if (myWeight[i] < 0){
                        cdf = (Number(cdf) + 0)/2
                        myChange.push('Negative Influence:')
                    }
                    else if (myWeight[i] > 0){ 
                        cdf = (Number(cdf) + 1)/2
                        myChange.push('Positive Influence:')
                    }
                }
                
                let text = ''
                for (let j = 0; j < myChange.length; j++){
                    if (j === myChange.length - 1){
                        text = text + myChange[j] + myNames[j]
                    }
                    else{
                        text = text + myChange[j] + myNames[j] + '<br>'
                    }
                }
                cdf = (cdf * 100).toFixed(3) + '%' + '<br>' +  text
            }
            else if (myWeight !== null){
                let counter = 0
                for (let i = 0; i < myWeight.length; i++){
                    if (myWeight[i] < 0){
                        counter = (counter + 0)/2
                        myChange2.push('Negative Influence:')
                    }
                    else if (myWeight[i] > 0){ 
                        counter = (counter + 1)/2
                        myChange2.push('Positive Influence:')
                    }
                }

                let text = ''
                for (let j = 0; j < myChange2.length; j++){
                    if (j === myChange2.length - 1){
                        text = text + myChange2[j] + myNames[j]
                    }
                    else{
                        text = text + myChange2[j] + myNames[j] + '<br>'
                    }
                }
                if (counter <= 0.35){
                    cdf = 'low' + '<br>' + text
                }
                else if (counter > 0.35 && counter <= 0.65){
                    cdf = 'normal' + '<br>' + text
                }
                else if (counter > 0.65){
                    cdf = 'high' + '<br>' + text
                }
            }
            else if (cdf !== null){
                cdf = (parseFloat(cdf) * 100).toFixed(3) + '%'
            }
            else{
                cdf = '0%'
            }
        }
        if (fileIndex === 4){
            let myWeight = findTaxonWeightbyName(transformedData, taxonName)
            if (myWeight === null || myWeight === '0.0' || myWeight === '-0.0'){
                cdf = 'N/A'
            }
            else{
                cdf = findTaxonCDFbyName2(transformedData, taxonName)
                cdf = (parseFloat(cdf) * 100).toFixed(3) + '%'
            }
        }
        
        let myVal = findNodeValueByName(cdfContainerData, taxonName)
        if (myVal === undefined){
            myVal = 0 + '%'
        }
        else{
            myVal = (myVal * 100).toFixed(6) + '%'
        }

        if (fileIndex === 4){
            let myWeight = findTaxonWeightbyName(transformedData, taxonName)
            if (myWeight === null || myWeight === '0.0' || myWeight === '-0.0'){
                myVal = 'N/A'
            }
            else{
                myVal = findNodeValueByName2(transformedData, taxonName)
                myVal = (parseFloat(myVal) * 100).toFixed(3) + '%'
            }
        }
    
    
        let mytext = 'Name : ' + myNames[1] + "<br>" +
            'Relative Abundance in this dataset : ' + myVal+ "<br>" + 
            'Percentile Value : ' + cdf + "<br>" +
            'Rank : ' + substringBeforeUnderscore + "<br>" +
            'NCBI Taxon ID: ' + myNames[2] + "<br>"

        if (fileIndex === 4){
            mytext = 'Name : ' + myNames[1] + "<br>" +
            'Aggregate Relative Abundance for this disease : ' + myVal+ "<br>" + 
            'Aggregate Percentile Value for this disease: ' + cdf + "<br>" +
            'Rank : ' + substringBeforeUnderscore + "<br>" +
            'NCBI Taxon ID: ' + myNames[2] + "<br>"
        }
    
        tooltip.innerHTML = mytext
        tooltip.style.left = `${event.pageX + 5}px`;
        tooltip.style.top = `${event.pageY + 5}px`;
        tooltip.style.visibility = 'visible';
    }

    // handles mouseoout event for the visualizations in the first row
    mouseout(event, p) {
        d3.selectAll(".sunburst-path").each(function(d, i) {
                var element = d3.select(this);
                element.style("stroke", element.attr("original-stroke"));
                element.style("stroke-width", element.attr("original-stroke-width"));
            });
    
                                        
        const tooltip = document.getElementById('tooltip');
        tooltip.style.visibility = 'hidden';
    }


    // fills this tab's dropdown and after an element is selected from the dropdown, the visualization is rendered
    fillDropDown(){
        const div = document.getElementById('selectedContainer-T2');
        const buttons = div.querySelectorAll('button');
        this.render('Whole Grain')

        if (buttons.length === 0 || this.tab2Boolean === 'new'){
            let diseaseNames = this.structureData[2].map(item => item.Name);

            const selectBox = document.getElementById('selectBox-T2');
            let selectedValues = [];
            let inputField = document.getElementById('selectInput-T2');
            const selectedContainer = document.getElementById('selectedContainer-T2');
            const that = this;  

            function updateSelectedContainer() {
                selectedContainer.innerHTML = '';
                selectedValues.forEach((value, index) => {
                    const span = document.createElement('span');
                    span.textContent = value;

                    const removeButton = document.createElement('button');
                    removeButton.textContent = 'x';
                    removeButton.addEventListener('click', function() {
                        selectedValues.splice(index, 1);
                        updateSelectedContainer();
                        Tab2Viz.Tab2SelectedButtons = selectedValues

                        if (selectedValues.length === 0){
                            Tab2Viz.Tab2VizRootName = 'sk__Bacteria__2'
                        }
                        removeVizDivs();
                        renderVizDivs(selectedValues.length, 'tab2');
                        const currentValues = getCurrentSliderValues();
                        this.sliderMin = currentValues.minValue
                        this.sliderMax = currentValues.maxValue
                        that.render(selectedValues);
                    });

                    span.appendChild(removeButton);
                    selectedContainer.appendChild(span);
                });
            }

            function initializeOptions() {
                selectBox.innerHTML = ''; 
                diseaseNames.forEach(option => {
                    let div = document.createElement('div');
                    div.textContent = option;
                    div.addEventListener('click', function() {
                        if (!selectedValues.includes(this.innerText)) {
                            selectedValues.push(this.innerText);
                            updateSelectedContainer();
                        }
                        inputField.value = ''; 
                        selectBox.style.display = 'none';
                        Tab2Viz.Tab2SelectedButtons = selectedValues
                        removeVizDivs();
                        renderVizDivs(selectedValues.length, 'tab2');
                        const currentValues = getCurrentSliderValues();
                        that.sliderMin = currentValues.minValue
                        that.sliderMax = currentValues.maxValue
                        console.log('here')
                        that.render(selectedValues);
                    });
                    selectBox.appendChild(div);
                });
            }

            inputField.addEventListener('input', function() {
                let filter = this.value.toUpperCase();
                let options = selectBox.getElementsByTagName('div');
                for (let i = 0; i < options.length; i++) {
                    let txtValue = options[i].textContent || options[i].innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        options[i].style.display = "";
                    } else {
                        options[i].style.display = "none";
                    }
                }
            });

            inputField.addEventListener('focus', function() {
                selectBox.style.display = 'block';
                initializeOptions();
            });

            document.addEventListener('click', function(event) {
                if (!event.target.matches('#selectInput-T2') && !event.target.closest('.select-items-T2')) {
                    selectBox.style.display = 'none';
                }
            });

            initializeOptions();
            updateSelectedContainer();
        }
        else{
            removeVizDivs();
            renderVizDivs(Tab2Viz.Tab2SelectedButtons.length, 'tab2');
            const currentValues = getCurrentSliderValues();
            this.sliderMin = currentValues.minValue
            this.sliderMax = currentValues.maxValue
            this.render(Tab2Viz.Tab2SelectedButtons);
        }
    }

    // transforms data to be used later 
    transformObject(obj, cdfContainerData) {
        const transformedObjects = [];
        Object.keys(obj).forEach((key, index) => {
            if (index > 1){
                let value = obj[key]


                const firstCloseBracketIndex = value.indexOf(']')
                const firstOpenParenIndex = value.indexOf('(');
                const result = value.substring(firstCloseBracketIndex+1, firstOpenParenIndex).trim();

                let match2 = value.match(/\[(\d+)\]/);
                let number = match2 ? match2[1] : null;
                if (number === null){
                    number = '620'
                }

                let match3 = value.match(/\((-?\d+(?:\.\d+)?)\)/);
                let number2 = match3 ? match3[1] : null;


                let secondOpenParen = this.findNthOccurrence(value, '(', 2);
                let secondCloseParen = this.findNthOccurrence(value, ')', 2);
                let string3 = value.substring(secondOpenParen + 1, secondCloseParen);
                let index = string3.indexOf('=');
                let number3 = string3.substring(index+1)

                let thirdOpenParen = this.findNthOccurrence(value, '(', 3);
                let thirdCloseParen = this.findNthOccurrence(value, ')', 3);
                let string4 = value.substring(thirdOpenParen + 1, thirdCloseParen);
                let index2 = string4.indexOf('=');
                let number4 = string4.substring(index2+1)

                const transformedObj = {};
                transformedObj.organism = result; 
                transformedObj.ncbi_taxon_id = number;
                transformedObj.weight = number2;
                transformedObj.abundance = number3
                transformedObj.cdf = number4

                transformedObjects.push(transformedObj);
            }
        });
        return transformedObjects;
    }

    // used by function above
    findNthOccurrence(str, char, n) {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === char) {
                count++;
                if (count === n) {
                    return i;
                }
            }
        }
        return -1;
    }


    // transforms data to be used later
    transformObject2(obj) {
        const transformedObjects = [];
        Object.keys(obj).forEach((key, index) => {
            if (index > 1) {
                let value = obj[key];
    
                const firstCloseBracketIndex = value.indexOf(']');
                const firstOpenParenIndex = value.indexOf('(');
                const result = value.substring(firstCloseBracketIndex + 1, firstOpenParenIndex).trim();
    
                let match2 = value.match(/\[(\d+)\]/);
                let number = match2 ? match2[1] : '620';
    
                let match3 = value.match(/\((-?\d+(?:\.\d+)?)\)/);
                let number2 = match3 ? match3[1] : null;
    
                if (result !== ' ') {
                    let existingObj = transformedObjects.find(obj => obj.organism === result);
    
                    if (existingObj) {
                        if (!Array.isArray(existingObj.weight)) {
                            existingObj.weight = [existingObj.weight];
                            existingObj.action = [obj.Name];
                        }
                        existingObj.weight.push(number2);
                        existingObj.action.push(obj.Name);
                    } else {
                        const transformedObj = {};
                        transformedObj.organism = result;
                        transformedObj.ncbi_taxon_id = number;
                        transformedObj.weight = [number2];
                        transformedObj.action = [obj.Name]
                        transformedObjects.push(transformedObj);
                    }
                }
            }
        });
        // console.log(transformedObjects)
        return transformedObjects;
    }

    // transform array based on data sent
    transformArray2(X){
        const newArray = [];
        for (let i = 0; i < X.length; i++) {
            if (i < 3){
                newArray.push(X[i]);
            }
            else{
                newArray.push(X[i]);
            }
        }
        return newArray;
    }

    // transform array based on data sent
    transformArray(X) {
        const newArray = [];
        for (let i = 0; i < X.length; i++) {
            newArray.push(X[i]);
            newArray.push(X[i]);
        }
        return newArray;
    }


    // renders the visualizations for this tab 
    render(diseaseName){
        console.log(diseaseName)

        let sliderMin = this.sliderMin/100
        let sliderMax = this.sliderMax/100

        let csvData = this.structureData[1]
        let myRow
        for (const row in csvData){
            if (csvData[row].Name === 'Crohn Disease'){
                myRow = csvData[row]
                break
            }
        }

        let transformedData = this.transformObject(myRow);

        let csvData3 = this.structureData[2];
        let transformedData3 = [];

        for (const name of diseaseName) {
            let myRow;

            for (const row of csvData3) {
                if (row.Name === name) {
                    myRow = row;
                    break; 
                }
            }

            
            if (myRow) {
                let result = this.transformObject2(myRow);
        
                if (Array.isArray(result)) {
                    transformedData3.push(...result);
                } else {
                    transformedData3.push(result);
                }
            }
        }


        const combinedResults = {};

        transformedData3.forEach(item => {
            if (!combinedResults[item.organism]) {
                combinedResults[item.organism] = {
                    ncbi_taxon_id: item.ncbi_taxon_id,
                    weight: [],
                    action: []
                };
            }
            combinedResults[item.organism].weight.push(...item.weight);
            combinedResults[item.organism].action.push(...item.action);
        });

        const resultArray = Object.keys(combinedResults).map(key => ({
            organism: key,
            ncbi_taxon_id: combinedResults[key].ncbi_taxon_id,
            weight: combinedResults[key].weight,
            action: combinedResults[key].action
        }));

        // console.log(resultArray)


        transformedData3 = resultArray





        let selectedOptionsArray = this.transformArray(this.selectedOptions)

        let selectedDataArray = this.transformArray2(this.structureData)
        

        let presentTaxons = []
        let givenCDFs = []
        let givenCDFs2 = []
        let givenCDFs3 = []
        for (let i = 0; i < this.classNames.length; i++) {
            let data = this.structureData[0]
            let svg 

            if (i <= 11){
                svg = d3.select(this.classNames[i]).append("svg")
                .attr("width", 2300)
                .attr("height", 1220)
                .append("g")
                .attr("transform", "translate(" + 2300 / 2 + "," + 1220 / 2 + ")");
            }

            let word = this.selectedOptions[i]

            if (i === 0){
                svg.append("text")
                .attr("x", -350)
                .attr("y", -550)
                .attr("font-size", "48")
                .attr("fill", "black")
                .text('Current Organisms Of Sample')
            }
            else if (i === 1){
                svg.append("text")
                .attr("x", -450)
                .attr("y", -550)
                .attr("font-size", "48")
                .attr("fill", "black")
                .text('Future Organisms Of Sample -- Given Action')
            }
            else if (i === 2){
                svg.append("text")
                .attr("x", -560)
                .attr("y", -550)
                .attr("font-size", "48")
                .attr("fill", "black")
                .text('Crohns Indicator Organisms of "Aggregate" Samples')
            }
            else if (i === 3){
                svg.append("text")
                // .attr("x", -450)
                .attr("y", -580)
                .attr("x", -540)
                .attr("font-size", "35")
                .attr("fill", "green")
                .attr("text-anchor", "middle") 
                .style("font-weight", "bold")
                .style("text-decoration", "underline")
                .text('ERR719231 (Sample) Proximity to Crohns Disease')

                svg.append("text")
                // .attr("x", -450)
                .attr("y", -580)
                .attr("x", 540)
                .attr("font-size", "30")
                .attr("fill", "black")
                .attr("text-anchor", "middle") 
                // .text('Sample Proximity to Diarrhea Post BEST Action(Red Wine)')
            }
            else if (i === 4){
                svg.append("text")
                // .attr("x", -480)
                .attr("y", -580)
                .attr("x", -540)
                .attr("font-size", "38")
                .attr("fill", "black")
                .attr("text-anchor", "middle") 
                .text('Sample Proximity to Diarrhea')

                svg.append("text")
                // .attr("x", -450)
                .attr("y", -580)
                .attr("x", 540)
                .attr("font-size", "30")
                .attr("fill", "black")
                .attr("text-anchor", "middle") 
                .text("Sample Proximity to Diarrhea Post WORST Action(Cow's Milk)")
            }
            else if (i === 5){
                svg.append("text")
                // .attr("x", -450)
                .attr("y", -580)
                .attr("x", -540)
                .attr("font-size", "38")
                .attr("fill", "black")
                .attr("text-anchor", "middle") 
                .text('Sample Proximity to Crohns')

                svg.append("text")
                // .attr("x", -450)
                .attr("y", -580)
                .attr("x", 540)
                .attr("font-size", "38")
                .attr("fill", "black")
                .attr("text-anchor", "middle") 
                .text('Sample Proximity to Crohns Post GOOD & BAD Actions')
            }
            else if (i === 6){
                // svg.append("text")
                // // .attr("x", -480)
                // .attr("y", -580)
                // .attr("x", -540)
                // .attr("font-size", "38")
                // .attr("fill", "black")
                // .attr("text-anchor", "middle") 
                // .text('Crohns Sample 2 Proximity to Crohns')

                // svg.append("text")
                // // .attr("x", -450)
                // .attr("y", -580)
                // .attr("x", 540)
                // .attr("font-size", "38")
                // .attr("fill", "black")
                // .attr("text-anchor", "middle") 
                // .text('Crohns Sample 2 Proximity to Crohns Post Action(s)')
            }
            else if (i === 7){
                svg.append("text")
                // .attr("x", -450)
                .attr("y", -580)
                .attr("x", -540)
                .attr("font-size", "38")
                .attr("fill", "black")
                .attr("text-anchor", "middle") 
                .text('Sample 5 Closeness to Condition--Crohns')

                svg.append("text")
                // .attr("x", -450)
                .attr("y", -580)
                .attr("x", 540)
                .attr("font-size", "38")
                .attr("fill", "black")
                .attr("text-anchor", "middle") 
                .text('Sample 5 Closeness to Condition Post Intervention(s)--Crohns')
            }
            else if (i === 8){
                svg.append("text")
                // .attr("x", -480)
                .attr("y", -580)
                .attr("x", -540)
                .attr("font-size", "38")
                .attr("fill", "black")
                .attr("text-anchor", "middle") 
                .text('Sample 6 Closeness to Condition--Crohns')

                svg.append("text")
                // .attr("x", -450)
                .attr("y", -580)
                .attr("x", 540)
                .attr("font-size", "38")
                .attr("fill", "black")
                .attr("text-anchor", "middle") 
                .text('Sample 6 Closeness to Condition Post Intervention(s)--Crohns')
            }
            else if (i === 9){
                svg.append("text")
                // .attr("x", -450)
                .attr("y", -580)
                .attr("x", -540)
                .attr("font-size", "38")
                .attr("fill", "black")
                .attr("text-anchor", "middle") 
                .text('Sample 7 Closeness to Condition--Crohns')

                svg.append("text")
                // .attr("x", -450)
                .attr("y", -580)
                .attr("x", 540)
                .attr("font-size", "38")
                .attr("fill", "black")
                .attr("text-anchor", "middle") 
                .text('Sample 7 Closeness to Condition Post Intervention(s)--Crohns')
            }
            else if (i === 10){
                svg.append("text")
                // .attr("x", -480)
                .attr("y", -580)
                .attr("x", -540)
                .attr("font-size", "38")
                .attr("fill", "black")
                .attr("text-anchor", "middle") 
                .text('Sample 8 Closeness to Condition--Crohns')

                svg.append("text")
                // .attr("x", -450)
                .attr("y", -580)
                .attr("x", 540)
                .attr("font-size", "38")
                .attr("fill", "black")
                .attr("text-anchor", "middle") 
                .text('Sample 8 Closeness to Condition Post Intervention(s)--Crohns')
            }
            else if (i === 11){
                svg.append("text")
                // .attr("x", -480)
                .attr("y", -580)
                .attr("x", -540)
                .attr("font-size", "38")
                .attr("fill", "black")
                .attr("text-anchor", "middle") 
                .text('Sample 9 Closeness to Condition--Crohns')

                svg.append("text")
                // .attr("x", -450)
                .attr("y", -580)
                .attr("x", 540)
                .attr("font-size", "38")
                .attr("fill", "black")
                .attr("text-anchor", "middle") 
                .text('Sample 9 Closeness to Condition Post Intervention(s)--Crohns')
            }
            

            
            if (Tab2Viz.Tab2VizRootName !== 'sk__Bacteria__2'){
                disableCheckboxes()
            }
            else{
                enableCheckboxes()
            }


            data = findChildByName(data, Tab2Viz.Tab2VizRootName)

            let that = this
            function processData(data) {
                if (data && typeof data === 'object' && data.children && Array.isArray(data.children)) {
                  assignValues(data);
                } else {
                  console.error("The data structure is not recognized or does not have a 'children' property.");
                }
            }
              

            processData(data);

            let hierarchy = d3.hierarchy(data).sum(d => d.value).sort((a, b) => b.value - a.value);
            let partition = d3.partition()
                    .size([2 * Math.PI, 100]);

            let root = partition(hierarchy);

            let arr = this.selectedRemovals
            for (let i = 0; i < arr.length; i++){
                let numbers = arr[i]
                let w = numbers[0]
                let x = numbers[1]
                root = reassignChildren(root, w, x); 
                root = adjustDepths(root, x); 
                root = partition(root); 
            }
            
            let findIN = new FindIndicators(this.structureData[1])
            let [myArray, myArray2, myArray3, myArray4] = findIN.returnIndicators()
            calculateLeafDescendantsAndNames(root, myArray, myArray2, myArray3, myArray4);
            let maxNodeName = findMaxValueNodeAtDepth1(root, 'nameFoundTotal');

            sortHierarchy(root, maxNodeName);

            root.each(function(d) {
                if (d.children) {
                    var totalLeafDescendants = d.children.reduce(function(sum, child) {
                        return sum + child.totalLeafDescendants;
                    }, 0);

                    
                    var currentAngle = d.x0;
                    d.children.forEach(function(child) {
                        var childWeight = child.totalLeafDescendants;
                        var angleRange = (childWeight / totalLeafDescendants) * (d.x1 - d.x0);
                        child.x0 = currentAngle;
                        child.x1 = currentAngle + angleRange;
                        currentAngle += angleRange;
                    });
                }
            });
 
            let arc = createArc(findMaxDepth(root) - 1)

            // cons
            let colorScaleLow = d3.scaleLinear()
                       .domain([0, sliderMin])
                       .range(["#0200b9", "#00fff3"]);
    
            let colorScaleHigh = d3.scaleLinear()
                        .domain([sliderMax, 1])
                        .range(["#ff0000", "#7b0000"]);

            let indicatorLow = d3.scaleLinear()
                        .domain([0, 1])
                        .range(["#654321", "#d2691e"]);
            
            let indicatorHigh = d3.scaleLinear()
                        .domain([0, 1])
                        .range(["#E0FFE0", "#003300"]);


            if (i === 0 || i === 1 || i === 2){
                svg.selectAll("path")
                .data(root.descendants().slice(1))
                .enter().append("path")
                .classed("sunburst-path", true)
                .attr("id", function(d){
                    let nodeName = d.data.name
                    let lastIndex = nodeName.lastIndexOf('__')
                    let firstIndex = nodeName.indexOf('__')
                    let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                    return "path-" + taxonName
                }) 
                .attr("d", arc)
                .style("fill", function(d) { 
                    if (i === 0){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)
                        let cdf = findTaxonCDFbyName(that.structureData[3], taxonName)
                        
                        if (cdf === null){
                            return "white"
                        }
                        else{
                            if (cdf < 0){
                                return colorScaleLow(0)
                            }
                            else if (cdf >= 0 && cdf < sliderMin){
                                if (sliderMin === 0){
                                    return "purple"
                                }
                                else{
                                    return colorScaleLow(cdf)
                                }
                            }
                            else if (cdf >= sliderMax && cdf <= 1){
                                if (sliderMax === 1){
                                    return "purple"
                                }
                                else{
                                    return colorScaleHigh(cdf)
                                }
                            }
                            else if (cdf > 1){
                                return colorScaleHigh(1)
                            }
                            else{
                                return "purple"
                            }
                        }
                    }
            
                    if (i === 1){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)

                        let myWeight = findTaxonWeightbyName(transformedData3, taxonName)
                        

                        let cdf = findTaxonCDFbyName(selectedDataArray[3], taxonName)

                        if (cdf !== null && myWeight !== null){
                            // if (myWeight != null){
                            //     console.log('X:', myWeight)
                            // }
                            for (let i = 0; i < myWeight.length; i++){
                                if (myWeight[i] < 0){
                                    cdf = (Number(cdf) + 0)/2
                                }
                                else if (myWeight[i] > 0){ 
                                    cdf = (Number(cdf) + 1)/2
                                }
                            }
                            if (cdf < 0){
                                return colorScaleLow(0)
                            }
                            else if (cdf >= 0 && cdf < sliderMin){
                                return colorScaleLow(cdf)
                            }
                            else if (cdf >= sliderMax && cdf <= 1){
                                return colorScaleHigh(cdf)
                            }
                            else if (cdf > 1){
                                return colorScaleHigh(1)
                            }
                            else{
                                return "purple"
                            }
                        }
                        else if (myWeight !== null){
                            let number = 0
                            for (let i = 0; i < myWeight.length; i++){
                                if (myWeight[i] < 0){
                                    number = (number + 0)/2
                                }
                                else if (myWeight[i] > 0){ 
                                    number = (number + 1)/2
                                }
                            }

                            if (number < 0){
                                return colorScaleLow(0)
                            }
                            else if (number >= 0 && number < sliderMin){
                                return colorScaleLow(number)
                            }
                            else if (number >= sliderMax && number <= 1){
                                return colorScaleHigh(number)
                            }
                            else if (number > 1){
                                return colorScaleHigh(1)
                            }
                            else{
                                return "purple"
                            }
                        }
                        else if (cdf !== null){
                            if (cdf < 0){
                                return colorScaleLow(0)
                            }
                            else if (cdf >= 0 && cdf < sliderMin){
                                return colorScaleLow(cdf)
                            }
                            else if (cdf >= sliderMax && cdf <= 1){
                                return colorScaleHigh(cdf)
                            }
                            else if (cdf > 1){
                                return colorScaleHigh(1)
                            }
                            else{
                                return "purple"
                            }
                        }
                        else{
                            return "white"
                        }
                    }
                    if (i === 2){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)

                        let myWeight = findTaxonWeightbyName(transformedData, taxonName)
                        if (myWeight === null || myWeight === '0.0' || myWeight === '-0.0'){
                            return "white"
                        }
                        else{
                            presentTaxons.push(nodeName)
                            if (myWeight > 0){
                                return "#003300"
                            }
                            else{
                                return "#d2691e"
                            }
                        }
                    }
                })
                .style("stroke", function(d){
                    if (i === 0){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)
                        let cdf = findTaxonCDFbyName(that.structureData[3], taxonName)

                        if (cdf === null){
                            return "grey"
                        }
                        else{
                            return "black"
                        }
                    }
                    if (i === 1){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)

                        let myWeight = findTaxonWeightbyName(transformedData3, taxonName)
                        if (myWeight === null){         
                            let cdf = findTaxonCDFbyName(selectedDataArray[3], taxonName)
                            if (cdf === null){
                                return "grey"
                            }
                            else{
                                return "black"
                            }
                        }
                        else{
                            return "black"
                        }
                    }
                    if (i === 2){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)

                        let myWeight = findTaxonWeightbyName(transformedData, taxonName)
                        if (myWeight === null || myWeight === '0.0' || myWeight === '-0.0'){
                            return "grey"
                        }
                        else{
                            return "black"
                        }
                    }
                })
                .style("opacity", function(d){
                    if (i === 0){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)
                        let cdf = findTaxonCDFbyName(that.structureData[3], taxonName)
                        if (cdf === null){
                            return "0.1"
                        }
                        else{
                            return "1"
                        }
                    }
                    if (i === 1){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)

                        let myWeight = findTaxonWeightbyName(transformedData3, taxonName)
                        if (myWeight === null){         
                            // let cdf = findTaxonCDFbyID(selectedDataArray[i+3], taxonID)
                            let cdf = findTaxonCDFbyName(selectedDataArray[3], taxonName)
                            if (cdf === null){
                                return "0.1"
                            }
                            else{
                                return "1"
                            }
                        }
                        else{
                            return "1"
                        }
                    }
                    if (i === 2){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)

                        let myWeight = findTaxonWeightbyName(transformedData, taxonName)
                
                        if (myWeight === null || myWeight === '0.0' || myWeight === '-0.0'){
                            return "0.1"
                        }
                        else{
                            return "1"
                        }
                    }
                }) 
                .style("stroke-width", function(d){
                    if (i === 0){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)
                        let cdf = findTaxonCDFbyName(that.structureData[3], taxonName)
                        if (cdf === null){
                            return "0.2"
                        }
                        else{
                            return "3"
                        }
                    }
                    if (i === 1){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)

                        let myWeight = findTaxonWeightbyName(transformedData3, taxonName)
                        if (myWeight === null){         
                            // let cdf = findTaxonCDFbyID(selectedDataArray[i+3], taxonID)
                            let cdf = findTaxonCDFbyName(selectedDataArray[3], taxonName)
                            if (cdf === null){
                                return "0.1"
                            }
                            else{
                                return "1"
                            }
                        }
                        else{
                            return "5"
                        }
                    }
                    if (i === 2){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)

                        let myWeight = findTaxonWeightbyName(transformedData, taxonName)
                        if (myWeight === null || myWeight === '0.0' || myWeight === '-0.0'){
                            return "0.2"
                        }
                        else{
                            return "3"
                        }
                    }
                })
                .on("click", function(event, p){
                    let found = 0
                    let myArr = p.children
                    for (let i = 0; i < myArr.length; i++) {
                        if (myArr[i].hasOwnProperty('children')) {
                            found = 1
                            break
                        }
                    } 
                    if (found = 1){
                        Tab2Viz.Tab2VizRootName = p.data.name
                        that.selectedRemovals = []
                        removeVizDivs()
                        renderVizDivs(that.selectedOptions.length, 'tab2')
                        removeLegendDivs()
                        renderLegendDivs()
                        that.renderLegend()
                        that.render(diseaseName)
                    }
                })
                .on("mouseover", function (event, d){
                    let nodeName = d.data.name
                    that.handleMouseOver(event, i+2, d, nodeName, that.structureData[3], transformedData, transformedData3)
                })
                .on("mouseout", that.mouseout)

                d3.selectAll(".sunburst-path").each(function(d, i) {
                    var element = d3.select(this);
                    element.attr("original-stroke", element.style("stroke"));
                    element.attr("original-stroke-width", element.style("stroke-width"));
                });
                
                let circle = svg.append("circle")
                    .attr("cx", 0) 
                    .attr("cy", 0) 
                    .attr("r", 30) 
                    .attr("fill", "black") 
                    .on("click", function(event, p){
                        if (Tab2Viz.Tab2VizRootName !== undefined){
                            if (Tab2Viz.Tab2VizRootName === 'sk__Bacteria__2'){
                                that.selectedRemovals = []
                                enableCheckboxes2()
                                removeVizDivs()
                                renderVizDivs(that.selectedOptions.length, 'tab2')
                                removeLegendDivs()
                                renderLegendDivs()
                                that.renderLegend()
                                that.render(diseaseName)
                            }
                            else{
                                let parent = findParentByName(Tab2Viz.Tab2VizData[0], Tab2Viz.Tab2VizRootName);
                                Tab2Viz.Tab2VizRootName = parent.name
                                removeVizDivs()
                                renderVizDivs(that.selectedOptions.length, 'tab2')
                                removeLegendDivs()
                                renderLegendDivs()
                                that.renderLegend()
                                that.render(diseaseName)
                            } 
                        }
                    })
                    .append("title")
                    .text(function(){
                        if (Tab2Viz.Tab2VizRootName === undefined){
                            return "Root = bacteria\n Rank = Kingdom\n NCBI Taxon ID = 2"
                        }
                        else{
                            let myNames = Tab2Viz.Tab2VizRootName.split('__')
                            return "Root = " + myNames[1] + "\n Rank = " + nameMapping(myNames[0]) + "\n NCBI Taxon ID = " + myNames[2]
                        }
                    })
            }


            if (i >= 3){
                d3.select('.dynamic-div-3').style('border-left', '7px solid black');

                let ival = i

                let curatedPresentTaxons = []
                for (let i = 0; i < presentTaxons.length; i++){
                    let nodeName = presentTaxons[i]
                    let lastIndex = nodeName.lastIndexOf('__')
                    let firstIndex = nodeName.indexOf('__')
                    let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                    curatedPresentTaxons.push(taxonName)
                }

                const bivariateColorScaleLIO = (value) => {
                    if (value < 0.5) {
                        return d3.interpolateRgb("darkred", "rgb(255, 200, 200)")(value / 0.49999999999999999999999999);
                    } else if (value > 0.5){
                        return d3.interpolateRgb("rgb(210, 215, 255)", "rgb(210, 215, 255)")((value - 0.50000000000000000000000001) / (1 - 0.50000000000000000000000001));
                    }
                    else if (value === 0.5){
                        return "white"
                    }
                };

                const bivariateColorScaleHIO = (value) => {
                    if (value < 0.5) {
                        return d3.interpolateRgb("rgb(210, 215, 255)", "rgb(210, 215, 255)")(value / 0.49999999999999999999999999);
                    } else if (value > 0.5) {
                        return d3.interpolateRgb("rgb(255, 200, 200)", "darkred")((value - 0.50000000000000000000000001) / (1 - 0.50000000000000000000000001));
                    }else if (value === 0.5){
                        return "white"
                    }
                };


                const colorDifferenceScaleLIO = d3.scaleLinear()
                                        .domain([-0.01, -0.0001, 0, 0.0001, 0.01])
                                        .range(["rgb(139, 128, 0)", "rgb(255, 255, 224)", "white", "rgb(144, 238, 144)", "rgb(18, 93, 13)"]);

                const colorDifferenceScaleHIO = d3.scaleLinear()
                                        .domain([-0.01, -0.0001, 0, 0.0001, 0.01])
                                        .range(["rgb(18, 93, 13)", "rgb(144, 238, 144)", "white", "rgb(255, 255, 224)", "rgb(139, 128, 0)"]);


                const newArray = [];
                let count = 0
                // let countofArray = 0;
                for (const obj of transformedData) {
                    // console.log(obj)
                    // console.log('Count: ', count)
                    count = count + 1
                    if (obj.weight < 0){
                        let sampleCDF = findTaxonCDFbyName(that.structureData[ival], obj.organism)
                        
                        if (sampleCDF == null){
                            sampleCDF = '0'
                            let colorRGB = bivariateColorScaleLIO(sampleCDF)

                            let sampleCDF1
                            if (ival === 3){
                                sampleCDF1 = Number(findTaxonCDFRedWinebyName(that.structureData[ival], obj.organism))
                                if (Number.isNaN(sampleCDF1)){
                                    sampleCDF1 = sampleCDF
                                }
                            }
                            else if (ival === 4){
                                sampleCDF1 = Number(findTaxonCDFCowMilkbyName(that.structureData[ival], obj.organism))
                                if (Number.isNaN(sampleCDF1)){
                                    sampleCDF1 = sampleCDF
                                }
                            }
                            else if (ival === 5){
                                let val1 = Number(findTaxonCDFRedWinebyName(that.structureData[ival], obj.organism))
                                let val2 = Number(findTaxonCDFCowMilkbyName(that.structureData[ival], obj.organism))
                                sampleCDF1 = (val1 + val2) / 2
                            }

                            let interventionCDF = sampleCDF1
                            let colorRGB2 = bivariateColorScaleLIO(interventionCDF)

                            let differenceInCDF = Number(interventionCDF) - Number(sampleCDF)
                            if (ival === 3){
                                // console.log('A:', interventionCDF)
                            }
                            
                            let differenceInColor 
                            let typeofDifference
                            if (differenceInCDF > 0.01){
                                differenceInColor = "rgb(18, 93, 13)"
                                typeofDifference = "good"
                            }
                            else if (differenceInCDF < -0.01){
                                differenceInColor = "rgb(139, 128, 0)"
                                typeofDifference = "bad"
                            }
                            else{
                                differenceInColor = colorDifferenceScaleLIO(differenceInCDF)
                            }

                            newArray.push({
                                organism: obj.organism,
                                ncbi_taxon_id: obj.ncbi_taxon_id,
                                weight: obj.weight,
                                color: colorRGB,
                                interventionColor: colorRGB2,
                                colorDifference: differenceInColor,
                                CDFdifference: typeofDifference
                                // indicatorColor: changeColor 
                            });
                        }
                        else{
                            let colorRGB = bivariateColorScaleLIO(sampleCDF)


                            let sampleCDF1
                            if (ival === 3){
                                sampleCDF1 = Number(findTaxonCDFRedWinebyName(that.structureData[ival], obj.organism))
                                if (Number.isNaN(sampleCDF1)){
                                    sampleCDF1 = sampleCDF
                                }
                            }
                            else if (ival === 4){
                                sampleCDF1 = Number(findTaxonCDFCowMilkbyName(that.structureData[ival], obj.organism))
                                if (Number.isNaN(sampleCDF1)){
                                    sampleCDF1 = sampleCDF
                                }
                            }
                            else if (ival === 5){
                                let val1 = Number(findTaxonCDFRedWinebyName(that.structureData[ival], obj.organism))
                                let val2 = Number(findTaxonCDFCowMilkbyName(that.structureData[ival], obj.organism))
                                sampleCDF1 = (val1 + val2) / 2
                            }

                            let interventionCDF = sampleCDF1
                            let colorRGB2 = bivariateColorScaleLIO(interventionCDF)

                            let differenceInCDF = Number(interventionCDF) - Number(sampleCDF)

                            if (ival === 3){
                            }
                            
                            let differenceInColor 
                            let typeofDifference
                            if (differenceInCDF > 0.01){
                                differenceInColor = "rgb(18, 93, 13)"
                                typeofDifference = "good"
                            }
                            else if (differenceInCDF < -0.01){
                                differenceInColor = "rgb(139, 128, 0)"
                                typeofDifference = "bad"
                            }
                            else{
                                differenceInColor = colorDifferenceScaleLIO(differenceInCDF)
                            }
                            
                            newArray.push({
                                organism: obj.organism,
                                ncbi_taxon_id: obj.ncbi_taxon_id,
                                weight: obj.weight,
                                color: colorRGB,
                                interventionColor: colorRGB2,
                                colorDifference: differenceInColor,
                                CDFdifference: typeofDifference
                                // interventionColor: colorRGB2,
                                // indicatorColor: changeColor 
                            });
                        }
                    }
                    else{
                        let sampleCDF = findTaxonCDFbyName(that.structureData[ival], obj.organism)
                        if (sampleCDF == null){
                            sampleCDF = '0'
                            let colorRGB = bivariateColorScaleHIO(sampleCDF)

                            let sampleCDF1
                            if (ival === 3){
                                sampleCDF1 = Number(findTaxonCDFRedWinebyName(that.structureData[ival], obj.organism))
                                if (Number.isNaN(sampleCDF1)){
                                    sampleCDF1 = sampleCDF
                                }
                            }
                            else if (ival === 4){
                                sampleCDF1 = Number(findTaxonCDFCowMilkbyName(that.structureData[ival], obj.organism))
                                if (Number.isNaN(sampleCDF1)){
                                    sampleCDF1 = sampleCDF
                                }
                            }
                            else if (ival === 5){
                                let val1 = Number(findTaxonCDFRedWinebyName(that.structureData[ival], obj.organism))
                                let val2 = Number(findTaxonCDFCowMilkbyName(that.structureData[ival], obj.organism))
                                sampleCDF1 = (val1 + val2) / 2
                            }


                            let interventionCDF = sampleCDF1
                            let colorRGB2 = bivariateColorScaleHIO(interventionCDF)

                            let differenceInCDF = Number(interventionCDF) - Number(sampleCDF)

                            if (ival === 3){
                            }
                            
                            let differenceInColor 
                            let typeofDifference
                            if (differenceInCDF > 0.01){
                                differenceInColor = "rgb(139, 128, 0)"
                                typeofDifference = "bad"
                            }
                            else if (differenceInCDF < -0.01){
                                differenceInColor = "rgb(18, 93, 13)"
                                typeofDifference = "good"
                            }
                            else{
                                differenceInColor = colorDifferenceScaleHIO(differenceInCDF)
                            }
                            newArray.push({
                                organism: obj.organism,
                                ncbi_taxon_id: obj.ncbi_taxon_id,
                                weight: obj.weight,
                                color: colorRGB,
                                interventionColor: colorRGB2,
                                colorDifference: differenceInColor,
                                CDFdifference: typeofDifference
                                // interventionColor: colorRGB2,
                                // indicatorColor: changeColor 
                            });
                        }
                        else{
                            let colorRGB = bivariateColorScaleHIO(sampleCDF)

                            let sampleCDF1
                            if (ival === 3){
                                sampleCDF1 = Number(findTaxonCDFRedWinebyName(that.structureData[ival], obj.organism))
                                if (Number.isNaN(sampleCDF1)){
                                    sampleCDF1 = sampleCDF
                                }
                            }
                            else if (ival === 4){
                                sampleCDF1 = Number(findTaxonCDFCowMilkbyName(that.structureData[ival], obj.organism))
                                if (Number.isNaN(sampleCDF1)){
                                    sampleCDF1 = sampleCDF
                                }
                            }
                            else if (ival === 5){
                                let val1 = Number(findTaxonCDFRedWinebyName(that.structureData[ival], obj.organism))
                                let val2 = Number(findTaxonCDFCowMilkbyName(that.structureData[ival], obj.organism))
                                sampleCDF1 = (val1 + val2) / 2
                            }


                            let interventionCDF = sampleCDF1
                            let colorRGB2 = bivariateColorScaleHIO(interventionCDF)

                            let differenceInCDF = Number(interventionCDF) - Number(sampleCDF)

                            if (ival === 3){
                            }
                            
                            let differenceInColor 
                            let typeofDifference
                            if (differenceInCDF > 0.01){
                                differenceInColor = "rgb(139, 128, 0)"
                                typeofDifference = "bad"
                            }
                            else if (differenceInCDF < -0.01){
                                differenceInColor = "rgb(18, 93, 13)"
                                typeofDifference = "good"
                            }
                            else{
                                differenceInColor = colorDifferenceScaleHIO(differenceInCDF)
                            }
                            newArray.push({
                                organism: obj.organism,
                                ncbi_taxon_id: obj.ncbi_taxon_id,
                                weight: obj.weight,
                                color: colorRGB,
                                interventionColor: colorRGB2,
                                colorDifference: differenceInColor,
                                CDFdifference: typeofDifference
                                // interventionColor: colorRGB2,
                                // indicatorColor: changeColor 
                            });
                        }
                    }
                }

                newArray.sort((a, b) => Math.abs(b.weight) - Math.abs(a.weight));
                // console.log(newArray)
                

                // Split the array into two parts
                const donutArray = newArray.slice(0, 30);
                const barcodeArray = newArray.slice(30);

                const legendArray1 = newArray.slice(9, 11)
                let legendArray2 = newArray.slice(9, 11)
                for (let kk = 0; kk < 2; kk++){
                    legendArray2 = legendArray2.concat(legendArray2)
                }
                
                if (ival === 3){
                    this.renderLegendofSecondRow(legendArray1, legendArray2)
                }

                // Calculate the total height distribution
                const totalHeight = 1220;  // Updated height
                const donutHeight = totalHeight * 0.6;
                const barcodeHeight = totalHeight * 0.4;
                const width = 1150;  // Updated width

                // Set up the donut chart (top 60%)
                const radius = (donutHeight / 1.4) - 30;

                donutArray.push({
                    CDFdifference: undefined,
                    color: "rgb(255, 255, 255)", // white
                    colorDifference: undefined,
                    interventionColor: undefined,
                    ncbi_taxon_id: undefined,
                    organism: undefined,
                    weight: "3"
                });
                

                // Normalize weights for donut
                const totalWeight = d3.sum(donutArray, d => Math.abs(d.weight));
                const normalizedWeights = donutArray.map(d => Math.abs(d.weight) / totalWeight);

                const pie = d3.pie()
                .value((d, i) => normalizedWeights[i])
                .sort(null)
                .startAngle(Math.PI)        // Start at 6 o'clock
                .endAngle(Math.PI / 2 - 2 * Math.PI);  // Go counter-clockwise (-3π/2)

                const arc = d3.arc()
                .innerRadius(radius * 0.6)
                .outerRadius(radius);

                const sliverArc = d3.arc()
                    .innerRadius(radius * 0.95) // Almost at the outer edge
                    .outerRadius(radius)       // Exactly at the outer edge
                    .cornerRadius(2);          // Optional: smooth out edges

                const innerArc = d3.arc()
                .innerRadius(radius * 0.57)
                .outerRadius(radius * 0.57)
                .cornerRadius(0);

                const outerArc = d3.arc()
                .innerRadius(radius * 1.03)
                .outerRadius(radius * 1.03)
                .cornerRadius(0);

                // Create a group for the donut chart and translate it to the top section
                const donutGroup = svg.append("g")
                .attr("transform", `translate(${-540}, ${-40})`);

                const arcData = pie(donutArray);

                donutGroup.selectAll("path.main")
                .data(arcData)
                .enter().append("path")
                .attr("class", "main")
                .attr("d", arc)
                .attr("fill", d => {
                // if (d.data.CDFdifference == undefined){
                // return "grey"
                // }
                return d.data.color
                })
                .attr("stroke", "black")
                .style("stroke-width", "2px")
                


                    

                // Add the lifted inner strokes for negative weights
                donutGroup.selectAll("path.inner-stroke")
                .data(pie(donutArray))
                .enter().append("path")
                // .attr("id", "LIOHIO")
                .attr("class", "inner-stroke")
                .attr("d", innerArc)
                .attr("fill", "none")
                .attr("stroke", d => d.data.weight < 0 ? "black" : "white")
                .style("stroke-width", "10px")
                // .style("opacity", 0)
            
                // Add the lifted outer strokes for positive weights
                donutGroup.selectAll("path.outer-stroke")
                    .data(pie(donutArray))
                    .enter().append("path")
                    // .attr("id", "LIOHIO")
                    .attr("class", "outer-stroke")
                    .attr("d", outerArc)
                    .attr("fill", "none")
                    .attr("stroke", d => d.data.weight > 0 && d.data.color != 'rgb(255, 255, 255)' ? "black" : "white")
                    .style("stroke-width", "10px")
                    // .style("opacity", 0)

               
                
                svg.append("line")
                    .attr("class", "label-line")
                    .attr("x1", -578)
                    .attr("y1", 448)
                    .attr("x2", -975)
                    .attr("y2", 550)
                    .attr("stroke", "black")
                    .attr("stroke-width", 3)
                    .attr("stroke-dasharray", "5,5")

                
                svg.append("line")
                    .attr("class", "label-line")
                    .attr("x1", -537)
                    .attr("y1", 450)
                    .attr("x2", -103)
                    .attr("y2", 550)
                    .attr("stroke", "black")
                    .attr("stroke-width", 3)
                    .attr("stroke-dasharray", "5,5")

                // Create bar code chart (bottom 40%)
                const barWidth = (width / barcodeArray.length) - 4;
                let barcodechartwidth = barWidth * barcodeArray.length
                let availablespace = (width - barcodechartwidth)/2

                let startingpoint = -575 + availablespace - 540
                const barcodeGroup = svg.append("g")
                .attr("transform", `translate(${startingpoint}, ${550})`);

                // Create bars
                barcodeGroup.selectAll("rect")
                .data(barcodeArray)
                .enter().append("rect")
                .attr("x", (d, i) => i * barWidth)
                .attr("y", 0)
                .attr("width", barWidth - 1) // -1 for spacing between bars
                .attr("height", barcodeHeight/10)
                .attr("fill", d => {
                    // if (d.CDFdifference == undefined){
                    //     return "grey"
                    // }
                    return d.color
                })
                .attr("stroke", "black")
                .style("stroke-width", "1px");


                barcodeGroup.selectAll("line")
                .data(barcodeArray)
                .enter().append("line")
                .attr("id", "LIOHIO")
                .attr("x1", (d, i) => i * barWidth)  // Center of each bar
                .attr("x2", (d, i) => i * barWidth + barWidth - 2)
                .attr("y1", d => d.weight > 0 ? -10 : barcodeHeight/10 + 10)  // Lift 10px from top or bottom
                .attr("y2", d => d.weight > 0 ? -10 : barcodeHeight/10 + 10)
                .attr("stroke", "black")
                .attr("stroke-width", "4px")
                .attr("stroke-linecap", "round")
                // .style("opacity", 0)


                let startingpoint2 = -575 + availablespace + 540
                const barcodeGroup2 = svg.append("g")
                .attr("transform", `translate(${startingpoint2}, ${500})`);

                


                const vizsToHide = ["#legendDiv", "#legendDiv2"];
                vizsToHide.forEach(selector => {
                    document.querySelector(selector).classList.add("viz-hidden");
                });

                const vizsToHide2 = [".slider", ".dynamic-div-0", ".dynamic-div-1", ".dynamic-div-2", ".dynamic-div-4", ".checkbox-container", ".custom-select-T2", ".button-container", ".dropdown-container"];
                vizsToHide2.forEach(selector => {
                    // This will apply to ALL elements with that class
                    document.querySelectorAll(selector).forEach(element => {
                        element.classList.add("viz-hidden");
                    });
                });

                

               
            }
        }
    }


}