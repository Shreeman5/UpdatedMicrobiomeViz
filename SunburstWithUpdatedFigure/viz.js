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
        let svg = d3.select(".dynamic-div-x3" ).append("svg")
        .attr("width", 760)
        .attr("height", 1570)

        const buttonGroup = svg.append("g")
        .attr("class", "toggle-button")
        .attr("transform", "translate(0, 0)") // Position in top-left corner
        .style("cursor", "pointer");


        // Button background rectangle
        const buttonRect = buttonGroup.append("rect")
        .attr("width", 165)
        .attr("height", 90)
        .attr("rx", 3)
        .attr("fill", "#007bff")
        .attr("stroke", "#0056b3")
        .attr("stroke-width", 1);

        // Button text
        buttonGroup.append("text")
        .attr("x", 10)
        .attr("y", 20)
        .attr("text-anchor", "start")
        .attr("font-family", "Arial, sans-serif")
        .attr("font-size", "25px")
        .attr("fill", "white")
        .text("LIO and HIO");

        buttonGroup.append("text")
        .attr("x", 10)
        .attr("y", 50)
        .attr("text-anchor", "start")
        .attr("font-family", "Arial, sans-serif")
        .attr("font-size", "25px")
        .attr("fill", "white")
        .text("toggler button");

        buttonGroup.append("text")
        .attr("x", 10)
        .attr("y", 80)
        .attr("text-anchor", "start")
        .attr("font-family", "Arial, sans-serif")
        .attr("font-size", "25px")
        .attr("fill", "white")
        .text("🤔")
        .on("mouseover", function(event) {
            // Get mouse position
            const [mouseX, mouseY] = d3.pointer(event);
            
            // Create tooltip box
            const tooltip = svg.append("g")
              .attr("class", "tooltip-box");
              
            // Add rectangle background
            tooltip.append("rect")
                .attr("x", mouseX + 30)
                .attr("y", mouseY + 30)
                .attr("width", 630)  // Increased width from 220 to 550
                .attr("height", 80)  // Increased height from 50 to 70 to accommodate larger text
                .attr("fill", "white")
                .attr("stroke", "black")
                .attr("stroke-width", 1)
                .attr("rx", 5)
                .attr("ry", 5);

                // Add text inside the box
            tooltip.append("text")
                .attr("x", mouseX + 40)
                .attr("y", mouseY + 60)
                .attr("font-size", "29")
                .attr("fill", "black")
                .text("Click this button to see low and high indicator");

            tooltip.append("text")
                .attr("x", mouseX + 40)
                .attr("y", mouseY+90)
                .attr("font-size", "29")
                .attr("fill", "black")
                .text("organisms in the LEGEND and the REAL DATA.");

          })
          .on("mouseout", function() {
            // Remove tooltip when not hovering
            svg.selectAll(".tooltip-box").remove();
          });


        const totalHeight = 1570;  // Updated height
        const donutHeight = totalHeight * 0.6;
        const barcodeHeight = totalHeight * 0.4;
        const width = 760;  // Updated width

        const radius = (donutHeight / 1.4) - 400;

        const totalWeight = d3.sum(donutArray, d => Math.abs(d.weight));
        const normalizedWeights = donutArray.map(d => Math.abs(d.weight) / totalWeight);



        const pie = d3.pie()
        .value((d, i) => normalizedWeights[i])
        .sort(null);

        const arc = d3.arc()
        .innerRadius(radius * 0.6)
        .outerRadius(radius);

        const innerArc = d3.arc()
        .innerRadius(radius * 0.57)
        .outerRadius(radius * 0.57)
        .cornerRadius(0);

        const innerArc2 = d3.arc()
        .innerRadius(radius * 0.54)
        .outerRadius(radius * 0.54)
        .cornerRadius(0);

        const outerArc = d3.arc()
        .innerRadius(radius * 1.03)
        .outerRadius(radius * 1.03)
        .cornerRadius(0);

        const outerArc2 = d3.arc()
        .innerRadius(radius * 1.06)
        .outerRadius(radius * 1.06)
        .cornerRadius(0);

        const donutGroup = svg.append("g")
        .attr("transform", `translate(${380}, ${565})`);

        const arcData = pie(donutArray);

        donutGroup.selectAll("path.main")
            .data(arcData)
            .enter().append("path")
            .attr("class", "main")
            .attr("d", arc)
            .attr("fill", d => {
                return d.data.color
            })
            .attr("stroke", "black")
            .style("stroke-width", "2px");


        donutGroup.selectAll("path.inner-stroke")
        .data(pie(donutArray))
        .enter().append("path")
        .attr("class", "inner-stroke")
        .attr("id", "LIOHIO") 
        .attr("d", innerArc2)
        .attr("fill", "none")
        .attr("stroke", d => d.data.weight < 0 ? "black" : "white")
        .style("stroke-width", "10px")
        .style("opacity", 0)
    
        // Add the lifted outer strokes for positive weights
        donutGroup.selectAll("path.outer-stroke")
            .data(pie(donutArray))
            .enter().append("path")
            .attr("class", "outer-stroke")
            .attr("id", "LIOHIO") 
            .attr("d", outerArc2)
            .attr("fill", "none")
            .attr("stroke", d => d.data.weight > 0 ? "black" : "white")
            .style("stroke-width", "10px")
            .style("opacity", 0)

        const barWidth = (width / barcodeArray.length) - 31;
        let barcodechartwidth = barWidth * barcodeArray.length

        
        const barcodeGroup = svg.append("g")
        .attr("transform", `translate(${120}, ${1050})`);
        
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
        .style("opacity", 0)


        


        donutGroup.append("defs").append("marker")
            .attr("id", "arrowhead")
            .attr("viewBox", "0 -5 10 10")
            .attr("refX", 8)
            .attr("refY", 0)
            .attr("markerWidth", 15)
            .attr("markerHeight", 15)
            .attr("orient", "auto-start-reverse")
            .append("path")
            .attr("d", "M0,-5L10,0L0,5")
            .attr("fill", "green");

        barcodeGroup.append("defs").append("marker")
            .attr("id", "barcode-arrowhead")
            .attr("viewBox", "0 -5 10 10")
            .attr("refX", 8)
            .attr("refY", 0)
            .attr("markerWidth", 15)
            .attr("markerHeight", 15)
            .attr("orient", "auto-start-reverse")
            .append("path")
            .attr("d", "M0,-5L10,0L0,5")
            .attr("fill", "green");

        const firstBlackInnerStroke = donutGroup.selectAll("path.inner-stroke")
            .filter(function() {
                return d3.select(this).attr("stroke") === "white";
            })
            .nodes()[0];    
        
        const firstData = d3.select(firstBlackInnerStroke).datum();
        const angle = (firstData.startAngle + firstData.endAngle) / 2;
        const radius2 = innerArc.innerRadius()();

        svg.append("text")
        .attr("x", 180)
        .attr("y", 85)
        .attr("font-size", "30")
        .attr("fill", "Green")
        .style("font-weight", "bold")
        .style("text-decoration", "underline")
        .text("LEGEND (with fake data)")

        svg.append("text")
        .attr("x", 130)
        .attr("y", 125)
        .attr("font-size", "28")
        .attr("fill", "black")
        .style("font-weight", "bold")
        // .style("font-style", "italic")
        .text("Hover over 🤔 to find more information")

        svg.append("text")
        .attr("x", 0)
        .attr("y", 165)
        .attr("font-size", "22.5")
        .attr("fill", "Green")
        .style("font-weight", "bold")
        .text("Donut (2) + Strip (8) shows the organisms (10) present in dummy data")

        svg.append("text")
        .attr("x", 0)
        .attr("y", 215)
        .attr("font-size", "22.5")
        .attr("fill", "Green")
        .style("font-weight", "bold")
        .style("text-decoration", "underline")
        .text("Donut shows organisms with higher frequency in disease literature")

        svg.append("text")
          .attr("x", 720)
          .attr("y", 215)
          .attr("font-size", "22.5")
          .attr("fill", "Green")
          .style("font-weight", "bold")
        //   .style("text-decoration", "underline")
          .text("🤔")
          .on("mouseover", function(event) {
              // Get mouse position
              const [mouseX, mouseY] = d3.pointer(event);
              
              // Create tooltip box
              const tooltip = svg.append("g")
                .attr("class", "tooltip-box");
                
              // Add rectangle background
              tooltip.append("rect")
                  .attr("x", mouseX - 550)
                  .attr("y", mouseY + 30)
                  .attr("width", 520)  // Increased width from 220 to 550
                  .attr("height", 130)  // Increased height from 50 to 70 to accommodate larger text
                  .attr("fill", "white")
                  .attr("stroke", "black")
                  .attr("stroke-width", 1)
                  .attr("rx", 5)
                  .attr("ry", 5);
  
                  // Add text inside the box
              tooltip.append("text")
                  .attr("x", mouseX - 540)
                  .attr("y", mouseY + 60)
                  .attr("font-size", "29")
                  .attr("fill", "black")
                  .text("Organisms ordered by arc size in");
  
              tooltip.append("text")
                  .attr("x", mouseX - 540)
                  .attr("y", mouseY+90)
                  .attr("font-size", "29")
                  .attr("fill", "black")
                  .text("donut, starting and ending at 12'o'clock.");
  
              tooltip.append("text")
                  .attr("x", mouseX - 540)
                  .attr("y", mouseY+120)
                  .attr("font-size", "29")
                  .attr("fill", "black")
                  .text("Top two organisms in literature shown");
  
              tooltip.append("text")
                  .attr("x", mouseX - 540)
                  .attr("y", mouseY+150)
                  .attr("font-size", "29")
                  .attr("fill", "black")
                  .text("here.");
            })
            .on("mouseout", function() {
              // Remove tooltip when not hovering
              svg.selectAll(".tooltip-box").remove();
            });
        
        // Calculate line start point (on the inner edge of the inner stroke)
        const lineStartX = Math.sin(angle) * radius2;
        const lineStartY = -Math.cos(angle) * radius2;
        
        // Calculate line end point (offset inward and to side)
        const lineEndX = -300
        const lineEndY = lineStartY

        donutGroup.append("line")
                .attr("class", "label-line")
                .attr("id", "LIOHIO") 
                .attr("x1", lineStartX + 300)
                .attr("y1", lineStartY)
                .attr("x2", lineEndX + 570)
                .attr("y2", lineEndY + 210)
                .attr("stroke", "black")
                .attr("stroke-width", 3)
                .style("opacity", 0)

        svg.append("text")
        .attr("id", "LIOHIO")
        .attr("x", 570)
        .attr("y", 810)
        .attr("font-size", "29")
        .attr("fill", "Black")
        .attr("text-anchor", "start")
        .style("font-weight", "bold")
        .style("opacity", 0)
        .text("Less of this")

        svg.append("text")
        .attr("id", "LIOHIO")
        .attr("x", 570)
        .attr("y", 840)
        .attr("font-size", "29")
        .attr("fill", "Black")
        .attr("text-anchor", "start")
        .style("font-weight", "bold")
        .style("opacity", 0)
        .text("organism = ")

        svg.append("text")
        .attr("id", "LIOHIO")
        .attr("x", 570)
        .attr("y", 870)
        .attr("font-size", "29")
        .attr("fill", "Black")
        .attr("text-anchor", "start")
        .style("font-weight", "bold")
        .style("opacity", 0)
        .text("closer to")

        svg.append("text")
        .attr("id", "LIOHIO")
        .attr("x", 570)
        .attr("y", 900)
        .attr("font-size", "29")
        .attr("fill", "Black")
        .attr("text-anchor", "start")
        .style("font-weight", "bold")
        .style("opacity", 0)
        .text("disease")

        svg.append("text")
          .attr("id", "LIOHIO")
          .attr("x", 690)
          .attr("y", 900)
          .attr("font-size", "29")
          .attr("fill", "Black")
          .attr("text-anchor", "start")
          .style("font-weight", "bold")
          .style("opacity", 0)
          .text("🤔")
          .on("mouseover", function(event) {
              // Get mouse position
              const [mouseX, mouseY] = d3.pointer(event);
              
              // Create tooltip box
              const tooltip = svg.append("g")
                .attr("class", "tooltip-box");
                
              // Add rectangle background
              tooltip.append("rect")
                  .attr("x", mouseX - 500)
                  .attr("y", mouseY + 30)
                  .attr("width", 450)  // Increased width from 220 to 550
                  .attr("height", 110)  // Increased height from 50 to 70 to accommodate larger text
                  .attr("fill", "white")
                  .attr("stroke", "black")
                  .attr("stroke-width", 1)
                  .attr("rx", 5)
                  .attr("ry", 5);
  
                  // Add text inside the box
              tooltip.append("text")
                  .attr("x", mouseX-490)
                  .attr("y", mouseY+60)
                  .attr("font-size", "29")
                  .attr("fill", "black")
                  .text("Inner line means low presence of");
  
              tooltip.append("text")
                  .attr("x", mouseX-490)
                  .attr("y", mouseY+90)
                  .attr("font-size", "29")
                  .attr("fill", "black")
                  .text("organism found in disease");
  
              tooltip.append("text")
                  .attr("x", mouseX-490)
                  .attr("y", mouseY+120)
                  .attr("font-size", "29")
                  .attr("fill", "black")
                  .text("(Low Indicator Organism = LIO)");
            })
            .on("mouseout", function() {
              // Remove tooltip when not hovering
              svg.selectAll(".tooltip-box").remove();
            });


        const firstBlackOuterStroke = donutGroup.selectAll("path.outer-stroke")
            .filter(function() {
                return d3.select(this).attr("stroke") === "white";
            })
            .nodes()[0];

        const firstData2 = d3.select(firstBlackOuterStroke).datum();
        const angle2 = (firstData2.startAngle + firstData2.endAngle) / 2;
        const radius3 = outerArc.outerRadius()();

        
        // Calculate line start point (on the inner edge of the inner stroke)
        const lineStartX2 = Math.sin(angle2) * radius3;
        const lineStartY2 = -Math.cos(angle2) * radius3;

        const lineEndX2 = lineStartX2
        const lineEndY2 = 150

        donutGroup.append("line")
                .attr("id", "LIOHIO")
                .attr("class", "label-line")
                .attr("x1", lineStartX2-570)
                .attr("y1", lineStartY2)
                .attr("x2", lineEndX2-570)
                .attr("y2", lineEndY2+70)
                .attr("stroke", "black")
                .attr("stroke-width", 3)
                .style("opacity", 0)

        svg.append("text")
        .attr("id", "LIOHIO")
        .attr("x", 0)
        .attr("y", 810)
        .attr("font-size", "29")
        .attr("fill", "Black")
        .attr("text-anchor", "start")
        .style("font-weight", "bold")
        .style("opacity", 0)
        .text("More of this")

        svg.append("text")
        .attr("id", "LIOHIO")
        .attr("x", 0)
        .attr("y", 840)
        .attr("font-size", "29")
        .attr("fill", "Black")
        .attr("text-anchor", "start")
        .style("font-weight", "bold")
        .style("opacity", 0)
        .text("organism =")

        svg.append("text")
        .attr("id", "LIOHIO")
        .attr("x", 0)
        .attr("y", 870)
        .attr("font-size", "29")
        .attr("fill", "Black")
        .attr("text-anchor", "start")
        .style("font-weight", "bold")
        .style("opacity", 0)
        .text("closer to")

        svg.append("text")
        .attr("id", "LIOHIO")
        .attr("x", 0)
        .attr("y", 900)
        .attr("font-size", "29")
        .attr("fill", "Black")
        .attr("text-anchor", "start")
        .style("font-weight", "bold")
        .style("opacity", 0)
        .text("disease")
        .on("mouseover", function(event) {
            // Get mouse position
            const [mouseX, mouseY] = d3.pointer(event);
            
            // Create tooltip box
            const tooltip = svg.append("g")
              .attr("class", "tooltip-box");
              
            // Add rectangle background
            tooltip.append("rect")
                .attr("x", mouseX + 50)
                .attr("y", mouseY + 30)
                .attr("width", 460)  // Increased width from 220 to 550
                .attr("height", 110)  // Increased height from 50 to 70 to accommodate larger text
                .attr("fill", "white")
                .attr("stroke", "black")
                .attr("stroke-width", 1)
                .attr("rx", 5)
                .attr("ry", 5);

                // Add text inside the box
            tooltip.append("text")
                .attr("x", mouseX + 60)
                .attr("y", mouseY + 60)
                .attr("font-size", "29")
                .attr("fill", "black")
                .text("Outer line means high presence of");

            tooltip.append("text")
                .attr("x", mouseX + 60)
                .attr("y", mouseY+90)
                .attr("font-size", "29")
                .attr("fill", "black")
                .text("organism found in disease");

            tooltip.append("text")
                .attr("x", mouseX + 60)
                .attr("y", mouseY+120)
                .attr("font-size", "29")
                .attr("fill", "black")
                .text("(High Indicator Organism = HIO)");
          })
          .on("mouseout", function() {
            // Remove tooltip when not hovering
            svg.selectAll(".tooltip-box").remove();
          });

        svg.append("text")
          .attr("id", "LIOHIO")
          .attr("x", 110)
          .attr("y", 900)
          .attr("font-size", "29")
          .attr("fill", "Black")
          .attr("text-anchor", "start")
          .style("font-weight", "bold")
          .style("opacity", 0)
          .text("🤔")
          .on("mouseover", function(event) {
              // Get mouse position
              const [mouseX, mouseY] = d3.pointer(event);
              
              // Create tooltip box
              const tooltip = svg.append("g")
                .attr("class", "tooltip-box");
                
              // Add rectangle background
              tooltip.append("rect")
                  .attr("x", mouseX + 50)
                  .attr("y", mouseY + 30)
                  .attr("width", 460)  // Increased width from 220 to 550
                  .attr("height", 110)  // Increased height from 50 to 70 to accommodate larger text
                  .attr("fill", "white")
                  .attr("stroke", "black")
                  .attr("stroke-width", 1)
                  .attr("rx", 5)
                  .attr("ry", 5);
  
                  // Add text inside the box
              tooltip.append("text")
                  .attr("x", mouseX + 60)
                  .attr("y", mouseY + 60)
                  .attr("font-size", "29")
                  .attr("fill", "black")
                  .text("Outer line means high presence of");
  
              tooltip.append("text")
                  .attr("x", mouseX + 60)
                  .attr("y", mouseY+90)
                  .attr("font-size", "29")
                  .attr("fill", "black")
                  .text("organism found in disease");
  
              tooltip.append("text")
                  .attr("x", mouseX + 60)
                  .attr("y", mouseY+120)
                  .attr("font-size", "29")
                  .attr("fill", "black")
                  .text("(High Indicator Organism = HIO)");
            })
            .on("mouseout", function() {
              // Remove tooltip when not hovering
              svg.selectAll(".tooltip-box").remove();
            });




        svg.append("line")
        .attr("class", "label-line")
        .attr("x1", 400)
        .attr("y1", 780)
        .attr("x2", 400)
        .attr("y2", 900)
        .attr("stroke", "black")
        .attr("stroke-width", 3)
        // .attr("marker-start", "url(#barcode-arrowhead)")
        // .attr("marker-end", "url(#barcode-arrowhead)")

        svg.append("text")
        .attr("x", 250)
        .attr("y", 925)
        .attr("font-size", "29")
        .attr("fill", "Black")
        .attr("text-anchor", "start")
        .style("font-weight", "bold")
        .text("Arc length indicates")

        svg.append("text")
        .attr("x", 250)
        .attr("y", 955)
        .attr("font-size", "29")
        .attr("fill", "Black")
        .attr("text-anchor", "start")
        .style("font-weight", "bold")
        .text("literature weight")

        svg.append("text")
          .attr("x", 480)
          .attr("y", 955)
          .attr("font-size", "29")
          .attr("fill", "Black")
          .attr("text-anchor", "start")
          .style("font-weight", "bold")
          .text("🤔")
          .on("mouseover", function(event) {
              // Get mouse position
              const [mouseX, mouseY] = d3.pointer(event);
              
              // Create tooltip box
              const tooltip = svg.append("g")
                .attr("class", "tooltip-box");
                
              // Add rectangle background
              tooltip.append("rect")
                  .attr("x", mouseX - 250)
                  .attr("y", mouseY + 30)
                  .attr("width", 500)  // Increased width from 220 to 550
                  .attr("height", 80)  // Increased height from 50 to 70 to accommodate larger text
                  .attr("fill", "white")
                  .attr("stroke", "black")
                  .attr("stroke-width", 1)
                  .attr("rx", 5)
                  .attr("ry", 5);
  
                  // Add text inside the box
              tooltip.append("text")
                  .attr("x", mouseX - 240)
                  .attr("y", mouseY + 60)
                  .attr("font-size", "29")
                  .attr("fill", "black")
                  .text("Organisms appears with the highest");
  
              tooltip.append("text")
                  .attr("x", mouseX - 240)
                  .attr("y", mouseY+90)
                  .attr("font-size", "29")
                  .attr("fill", "black")
                  .text("frequency in disease literature");
            })
            .on("mouseout", function() {
              // Remove tooltip when not hovering
              svg.selectAll(".tooltip-box").remove();
            });

        svg.append("text")
        .attr("x", 0)
        .attr("y", 1015)
        .attr("font-size", "23.5")
        .attr("fill", "Green")
        .style("font-weight", "bold")
        .style("text-decoration", "underline")
        .text("Strip shows organisms with lower frequency in disease literature")

        svg.append("text")
          .attr("x", 730)
          .attr("y", 1015)
          .attr("font-size", "23.5")
          .attr("fill", "Green")
          .style("font-weight", "bold")
          .text("🤔")
          .on("mouseover", function(event) {
              // Get mouse position
              const [mouseX, mouseY] = d3.pointer(event);
              
              // Create tooltip box
              const tooltip = svg.append("g")
                .attr("class", "tooltip-box");
                
              // Add rectangle background
              tooltip.append("rect")
                  .attr("x", mouseX - 600)
                  .attr("y", mouseY + 30)
                  .attr("width", 590)  // Increased width from 220 to 550
                  .attr("height", 80)  // Increased height from 50 to 70 to accommodate larger text
                  .attr("fill", "white")
                  .attr("stroke", "black")
                  .attr("stroke-width", 1)
                  .attr("rx", 5)
                  .attr("ry", 5);
  
                  // Add text inside the box
              tooltip.append("text")
                  .attr("x", mouseX - 590)
                  .attr("y", mouseY + 60)
                  .attr("font-size", "29")
                  .attr("fill", "black")
                  .text("Organisms ordered left to right in strip.");
  
              tooltip.append("text")
                  .attr("x", mouseX - 590)
                  .attr("y", mouseY + 90)
                  .attr("font-size", "29")
                  .attr("fill", "black")
                  .text("Bottom 8 organisms in literature shown here.");
  
            })
            .on("mouseout", function() {
              // Remove tooltip when not hovering
              svg.selectAll(".tooltip-box").remove();
            });



        svg.append("line")
        .attr("class", "label-line")
        .attr("x1", 590)
        .attr("y1", 330)
        .attr("x2", 590)
        .attr("y2", 420)
        .attr("stroke", "black")
        .attr("stroke-width", 3)
        // .attr("marker-end", "url(#barcode-arrowhead)")

        svg.append("text")
        .attr("x", 565)
        .attr("y", 285)
        .attr("font-size", "29")
        .attr("fill", "Black")
        .attr("text-anchor", "start")
        .style("font-weight", "bold")
        .text("Similar to")

        svg.append("text")
        .attr("x", 565)
        .attr("y", 315)
        .attr("font-size", "29")
        .attr("fill", "Black")
        .attr("text-anchor", "start")
        .style("font-weight", "bold")
        .text("Disease")

        svg.append("text")
          .attr("x", 680)
          .attr("y", 315)
          .attr("font-size", "29")
          .attr("fill", "Black")
          .attr("text-anchor", "start")
          .style("font-weight", "bold")
          .text("🤔")
          .on("mouseover", function(event) {
              // Get mouse position
              const [mouseX, mouseY] = d3.pointer(event);
              
              // Create tooltip box
              const tooltip = svg.append("g")
                .attr("class", "tooltip-box");
                
              // Add rectangle background
              tooltip.append("rect")
                  .attr("x", mouseX - 520)
                  .attr("y", mouseY + 30)
                  .attr("width", 500)  // Increased width from 220 to 550
                  .attr("height", 80)  // Increased height from 50 to 70 to accommodate larger text
                  .attr("fill", "white")
                  .attr("stroke", "black")
                  .attr("stroke-width", 1)
                  .attr("rx", 5)
                  .attr("ry", 5);
  
                  // Add text inside the box
              tooltip.append("text")
                  .attr("x", mouseX - 510)
                  .attr("y", mouseY +60)
                  .attr("font-size", "29")
                  .attr("fill", "black")
                  .text("Red means organism presence in");
  
              tooltip.append("text")
                  .attr("x", mouseX - 510)
                  .attr("y", mouseY+90)
                  .attr("font-size", "29")
                  .attr("fill", "black")
                  .text("sample consistent with disease");
            })
            .on("mouseout", function() {
              // Remove tooltip when not hovering
              svg.selectAll(".tooltip-box").remove();
            });


        svg.append("line")
        .attr("class", "label-line")
        .attr("x1", 240)
        .attr("y1", 370)
        .attr("x2", 240)
        .attr("y2", 270)
        .attr("stroke", "black")
        .attr("stroke-width", 3)
        // .attr("marker-end", "url(#barcode-arrowhead)")

        svg.append("text")
        .attr("x", 0)
        .attr("y", 265)
        .attr("font-size", "29")
        .attr("fill", "Black")
        // .attr("text-anchor", "end")
        .style("font-weight", "bold")
        .text("Similar to No-Disease")

          svg.append("text")
          .attr("x", 300)
          .attr("y", 265)
          .attr("font-size", "29")
          .attr("fill", "Black")
          // .attr("text-anchor", "end")
          .style("font-weight", "bold")
          .text("🤔")
          .on("mouseover", function(event) {
              // Get mouse position
              const [mouseX, mouseY] = d3.pointer(event);
              
              // Create tooltip box
              const tooltip = svg.append("g")
                .attr("class", "tooltip-box");
                
              // Add rectangle background
              tooltip.append("rect")
                  .attr("x", mouseX - 80)
                  .attr("y", mouseY + 30)
                  .attr("width", 490)  // Increased width from 220 to 550
                  .attr("height", 80)  // Increased height from 50 to 70 to accommodate larger text
                  .attr("fill", "white")
                  .attr("stroke", "black")
                  .attr("stroke-width", 1)
                  .attr("rx", 5)
                  .attr("ry", 5);
  
                  // Add text inside the box
              tooltip.append("text")
                  .attr("x", mouseX - 70)
                  .attr("y", mouseY +60)
                  .attr("font-size", "29")
                  .attr("fill", "black")
                  .text("Blue means organism presence in");
  
              tooltip.append("text")
                  .attr("x", mouseX - 70)
                  .attr("y", mouseY+90)
                  .attr("font-size", "29")
                  .attr("fill", "black")
                  .text("sample smaller compared to disease");
            })
            .on("mouseout", function() {
              // Remove tooltip when not hovering
              svg.selectAll(".tooltip-box").remove();
            });

        svg.append("line")
        .attr("class", "label-line")
        .attr("id", "LIOHIO")
        .attr("x1", 155)
        .attr("y1", 1120)
        .attr("x2", 155)
        .attr("y2", 1160)
        .attr("stroke", "black")
        .attr("stroke-width", 3)
        .style("opacity", 0)

        svg.append("text")
        .attr("id", "LIOHIO")
        .attr("x", 80)
        .attr("y", 1185)
        .attr("font-size", "29")
        .attr("fill", "Black")
        // .attr("text-anchor", "end")
        .style("font-weight", "bold")
        .text("Less of this organism = closer to disease")
        .style("opacity", 0)


        svg.append("text")
            .attr("id", "LIOHIO")
            .attr("x", 650)
            .attr("y", 1185)
            .attr("font-size", "29")
            .attr("fill", "Black")
            // .attr("text-anchor", "end")
            .style("font-weight", "bold")
            .style("opacity", 0)
            .text("🤔")
            .on("mouseover", function(event) {
                // Get mouse position
                const [mouseX, mouseY] = d3.pointer(event);
                
                // Create tooltip box
                const tooltip = svg.append("g")
                  .attr("class", "tooltip-box");
                  
                // Add rectangle background
                tooltip.append("rect")
                    .attr("x", mouseX - 400)
                    .attr("y", mouseY + 10)
                    .attr("width", 470)  // Increased width from 220 to 550
                    .attr("height", 200)  // Increased height from 50 to 70 to accommodate larger text
                    .attr("fill", "white")
                    .attr("stroke", "black")
                    .attr("stroke-width", 1)
                    .attr("rx", 5)
                    .attr("ry", 5);
    
                    // Add text inside the box
                tooltip.append("text")
                    .attr("x", mouseX - 390)
                    .attr("y", mouseY + 40)
                    .attr("font-size", "29")
                    .attr("fill", "black")
                    .text("Lower line means low presence of");
    
                tooltip.append("text")
                    .attr("x", mouseX - 390)
                    .attr("y", mouseY+70)
                    .attr("font-size", "29")
                    .attr("fill", "black")
                    .text("organism found in disease");
    
                tooltip.append("text")
                    .attr("x", mouseX - 390)
                    .attr("y", mouseY+100)
                    .attr("font-size", "29")
                    .attr("fill", "black")
                    .text("(Low Indicator Organism = LIO)");
    
                tooltip.append("text")
                    .attr("x", mouseX - 390)
                    .attr("y", mouseY+130)
                    .attr("font-size", "29")
                    .attr("fill", "black")
                    .text("Upper line means high presence of");
    
                tooltip.append("text")
                    .attr("x", mouseX - 390)
                    .attr("y", mouseY+160)
                    .attr("font-size", "29")
                    .attr("fill", "black")
                    .text("organism found in disease");
    
                tooltip.append("text")
                    .attr("x", mouseX - 390)
                    .attr("y", mouseY+190)
                    .attr("font-size", "29")
                    .attr("fill", "black")
                    .text("(High Indicator Organism = HIO)");
              })
              .on("mouseout", function() {
                // Remove tooltip when not hovering
                svg.selectAll(".tooltip-box").remove();
              });
    
              d3.selectAll(".toggleable")
                .style("display", function() {
                    return d3.select(this).style("display") === "block" ? "none" : "block";
                });


        // svg.append("line")
        // .attr("class", "label-line")
        // .attr("x1", 535)
        // .attr("y1", 940)
        // .attr("x2", 535)
        // .attr("y2", 1060)
        // .attr("stroke", "black")
        // .attr("stroke-width", 3)
        // // .attr("marker-end", "url(#barcode-arrowhead)")

        // svg.append("text")
        // .attr("x", 445)
        // .attr("y", 1085)
        // .attr("font-size", "29")
        // .attr("fill", "Black")
        // // .attr("text-anchor", "end")
        // .style("font-weight", "bold")
        // .text("Upper line(?)")
        // .on("mouseover", function(event) {
        //     // Get mouse position
        //     const [mouseX, mouseY] = d3.pointer(event);
            
        //     // Create tooltip box
        //     const tooltip = svg.append("g")
        //       .attr("class", "tooltip-box");
              
        //     // Add rectangle background
        //     tooltip.append("rect")
        //         .attr("x", mouseX - 250)
        //         .attr("y", mouseY + 30)
        //         .attr("width", 470)  // Increased width from 220 to 550
        //         .attr("height", 110)  // Increased height from 50 to 70 to accommodate larger text
        //         .attr("fill", "white")
        //         .attr("stroke", "black")
        //         .attr("stroke-width", 1)
        //         .attr("rx", 5)
        //         .attr("ry", 5);

        //         // Add text inside the box
        //     tooltip.append("text")
        //         .attr("x", mouseX - 240)
        //         .attr("y", mouseY + 60)
        //         .attr("font-size", "29")
        //         .attr("fill", "black")
        //         .text("Upper line means high presence of");

        //     tooltip.append("text")
        //         .attr("x", mouseX - 240)
        //         .attr("y", mouseY+90)
        //         .attr("font-size", "29")
        //         .attr("fill", "black")
        //         .text("organism found in disease");

        //     tooltip.append("text")
        //         .attr("x", mouseX - 240)
        //         .attr("y", mouseY+120)
        //         .attr("font-size", "29")
        //         .attr("fill", "black")
        //         .text("(High Indicator Organism = HIO)");
        //   })
        //   .on("mouseout", function() {
        //     // Remove tooltip when not hovering
        //     svg.selectAll(".tooltip-box").remove();
        //   });

        svg.append("text")
        .attr("x", 445)
        .attr("y", 900)
        .attr("font-size", "19")
        .attr("fill", "Black")
        // .attr("text-anchor", "end")
        .style("font-weight", "bold")
        .text("")

        svg.append("text")
        .attr("x", 445)
        .attr("y", 920)
        .attr("font-size", "19")
        .attr("fill", "Black")
        // .attr("text-anchor", "end")
        .style("font-weight", "bold")
        .text("")
        
        

        const gradient5 = svg.append("defs")
            .append("linearGradient")
            .attr("id", "gradient7")
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "100%")
            .attr("y2", "0%");
        
        gradient5.append("stop")
            .attr("offset", "0%")
            .attr("stop-color", "rgb(210, 215, 255)");

        gradient5.append("stop")
            .attr("offset", "30%")
            .attr("stop-color", "rgb(210, 215, 255)");
        

        gradient5.append("stop")
            .attr("offset", "30%")
            .attr("stop-color", "rgb(255, 200, 200)")
        
        gradient5.append("stop")
            .attr("offset", "100%")
            .attr("stop-color", "darkred");
        
        // Append the rectangle with the gradient fill
        svg.append("rect")
            .attr("x", 0)
            .attr("y", 1220)
            .attr("width", 760)
            .attr("height", 30)
            .style("fill", "url(#gradient7)");

        svg.append("text")
            .attr("x", 0)
            .attr("y", 1290)
            .attr("font-size", "25")
            .attr("fill", "Black")
            .attr("text-anchor", "start")
            .style("font-weight", "bold")
            .text("0%")

        svg.append("text")
            .attr("x", 210)
            .attr("y", 1290)
            .attr("font-size", "25")
            .attr("fill", "Black")
            .attr("text-anchor", "start")
            .style("font-weight", "bold")
            .text("50%")

        svg.append("text")
            .attr("x", 50)
            .attr("y", 1350)
            .attr("font-size", "29")
            .attr("fill", "Black")
            .attr("text-anchor", "start")
            .style("font-weight", "bold")
            .text("Organism prevalence relative to disease state")

        svg.append("text")
            .attr("x", 760)
            .attr("y", 1290)
            .attr("font-size", "25")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .style("font-weight", "bold")
            .text("100%")
        
        let strokesVisible = false;
        
        function toggleStrokes() {
            if (strokesVisible) {
              // Hide strokes using IDs
              d3.selectAll("#LIOHIO")
                .transition()
                .duration(300)
                .style("opacity", 0);
              
              strokesVisible = false;
            } else {
              // Show strokes using IDs
              d3.selectAll("#LIOHIO")
                .transition()
                .duration(300)
                .style("opacity", 1);
              
              strokesVisible = true;
            }
          }

        buttonGroup.on("click", toggleStrokes);

        // svg.append("text")
        //     .attr("x", 0)
        //     .attr("y", 1230)
        //     .attr("font-size", "35")
        //     .attr("fill", "red")
        //     .attr("text-anchor", "start")
        //     .text("Sample = ERR719231")

        


        // const gradient6 = svg.append("defs")
        //     .append("linearGradient")
        //     .attr("id", "gradient8")
        //     .attr("x1", "0%")
        //     .attr("y1", "0%")
        //     .attr("x2", "100%")
        //     .attr("y2", "0%");
        
        // gradient6.append("stop")
        //     .attr("offset", "0%")
        //     .attr("stop-color", "rgb(139, 128, 0)");

        // gradient6.append("stop")
        //     .attr("offset", "49%")
        //     .attr("stop-color", "rgb(255, 255, 224)");
        
        // gradient6.append("stop")
        //     .attr("offset", "50%")
        //     .attr("stop-color", "white");

        // gradient6.append("stop")
        //     .attr("offset", "51%")
        //     .attr("stop-color", "rgb(144, 238, 144)")
        
        // gradient6.append("stop")
        //     .attr("offset", "100%")
        //     .attr("stop-color", "rgb(18, 93, 13)");
        
        // // Append the rectangle with the gradient fill
        // svg.append("rect")
        //     .attr("x", 0)
        //     .attr("y", 1200)
        //     .attr("width", 760)
        //     .attr("height", 30)
        //     .style("fill", "url(#gradient8)");
        

        // svg.append("text")
        //     .attr("x", 0)
        //     .attr("y", 1260)
        //     .attr("font-size", "25")
        //     .attr("fill", "Black")
        //     .attr("text-anchor", "start")
        //     .text("Bad CDF Change w/ Action(s)")

        // svg.append("text")
        //     .attr("x", 760)
        //     .attr("y", 1260)
        //     .attr("font-size", "25")
        //     .attr("fill", "Black")
        //     .attr("text-anchor", "end")
        //     .text("Good CDF Change w/ Action(s)")

        
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
            // else if (i === 5){

            //     svg = d3.select(this.classNames[i]).append("svg")
            //         .attr("width", 3120)
            //         .attr("height", 1220)
            //         .append("g")
            //         .attr("transform", `translate(${100},${20})`);
            // }
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
                .attr("font-size", "30")
                .attr("fill", "green")
                .attr("text-anchor", "middle") 
                .style("font-weight", "bold")
                .style("text-decoration", "underline")
                .text('Sample Proximity to Crohns Disease (with REAL DATA from sample = ERR719231)')

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
                d3.select('.dynamic-div-3').style('border-left', '5px solid black');

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

                // let countofArray = 0
                for (const obj of transformedData) {
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
                console.log(newArray)
                

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

                // Normalize weights for donut
                const totalWeight = d3.sum(donutArray, d => Math.abs(d.weight));
                const normalizedWeights = donutArray.map(d => Math.abs(d.weight) / totalWeight);

                const pie = d3.pie()
                .value((d, i) => normalizedWeights[i])
                .sort(null);

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
                        //     return "grey"
                        // }
                        return d.data.color
                    })
                    .attr("stroke", "black")
                    .style("stroke-width", "2px");

                // Now add lines for first and last arcs
                // const firstArc = arcData[0];
                // const lastArc = arcData[arcData.length - 1];

                // // Add line for first arc (pointing to center [0,0])
                // donutGroup.append("path")
                // .attr("d", () => {
                //     const outerPoint = arc.centroid(firstArc);
                //     const innerPoint = [0, -100];
                //     return `M${outerPoint[0]},${outerPoint[1]}L${innerPoint[0]},${innerPoint[1]}`;
                // })
                // .attr("stroke", "black")
                // .attr("stroke-width", "3px")
                // .attr("fill", "none");

                // // Add line for last arc (pointing to [100,0])
                // donutGroup.append("path")
                // .attr("d", () => {
                //     const outerPoint = arc.centroid(lastArc);
                //     const innerPoint = [-100, -100];
                //     return `M${outerPoint[0]},${outerPoint[1]}L${innerPoint[0]},${innerPoint[1]}`;
                // })
                // .attr("stroke", "black")
                // .attr("stroke-width", "3px")
                // .attr("fill", "none");



                    

                // Add the lifted inner strokes for negative weights
                donutGroup.selectAll("path.inner-stroke")
                .data(pie(donutArray))
                .enter().append("path")
                .attr("id", "LIOHIO")
                .attr("class", "inner-stroke")
                .attr("d", innerArc)
                .attr("fill", "none")
                .attr("stroke", d => d.data.weight < 0 ? "black" : "white")
                .style("stroke-width", "10px")
                .style("opacity", 0)
            
                // Add the lifted outer strokes for positive weights
                donutGroup.selectAll("path.outer-stroke")
                    .data(pie(donutArray))
                    .enter().append("path")
                    .attr("id", "LIOHIO")
                    .attr("class", "outer-stroke")
                    .attr("d", outerArc)
                    .attr("fill", "none")
                    .attr("stroke", d => d.data.weight > 0 ? "black" : "white")
                    .style("stroke-width", "10px")
                    .style("opacity", 0)

                // donutGroup.append("defs").append("marker")
                //     .attr("id", "arrowhead")
                //     .attr("viewBox", "0 -5 10 10")
                //     .attr("refX", 8)
                //     .attr("refY", 0)
                //     .attr("markerWidth", 6)
                //     .attr("markerHeight", 6)
                //     .attr("orient", "auto")
                //     .append("path")
                //     .attr("d", "M0,-5L10,0L0,5")
                //     .attr("fill", "black");

                // After rendering, find the first black inner stroke and add the label
                // Use a slight delay to ensure all elements are rendered
                // setTimeout(() => {
                //     // Find the first path with inner-stroke class that has black stroke
                //     const firstBlackInnerStroke = donutGroup.selectAll("path.inner-stroke")
                //         .filter(function() {
                //             return d3.select(this).attr("stroke") === "black";
                //         })
                //         .nodes()[0];
                    
                //     if (firstBlackInnerStroke) {
                //         // Get the centroid of this path to position our line
                //         const firstData = d3.select(firstBlackInnerStroke).datum();
                //         const angle = (firstData.startAngle + firstData.endAngle) / 2;
                //         const radius = innerArc.innerRadius()();
                        
                //         // Calculate line start point (on the inner edge of the inner stroke)
                //         const lineStartX = Math.sin(angle) * radius;
                //         const lineStartY = -Math.cos(angle) * radius;
                        
                //         // Calculate line end point (offset inward and to side)
                //         const lineEndX = 350
                //         const lineEndY = -500
                        
                //         // Add the line
                //         donutGroup.append("line")
                //                     .attr("class", "label-line")
                //                     .attr("x1", lineStartX)
                //                     .attr("y1", lineStartY)
                //                     .attr("x2", lineEndX)
                //                     .attr("y2", lineEndY)
                //                     .attr("stroke", "black")
                //                     .attr("stroke-width", 3)
                //                     // .attr("marker-end", "url(#arrowhead)");

                //         donutGroup.append("line")
                //             .attr("class", "label-line")
                //             .attr("x1", lineEndX)
                //             .attr("y1", lineEndY)
                //             .attr("x2", 400)
                //             .attr("y2", lineEndY)
                //             .attr("stroke", "black")
                //             .attr("stroke-width", 3)
                //             .attr("marker-end", "url(#arrowhead)")
                        
                //         // Add the text label
                //         donutGroup.append("text")
                //             .attr("class", "label-text")
                //             .attr("x", 410)
                //             .attr("y", -490)
                //             .attr("text-anchor", lineStartX < 0 ? "end" : "start")
                //             .attr("dominant-baseline", "middle")
                //             .attr("font-size", "34px")
                //             .attr("font-weight", "bold")
                //             .text("LIO");

                //         // for the ROLW's

                //         donutGroup.append("line")
                //             .attr("class", "label-line")
                //             .attr("x1", 0)
                //             .attr("y1", -100)
                //             .attr("x2", 0)
                //             .attr("y2", 0)
                //             .attr("stroke", "black")
                //             .attr("stroke-width", 3)
                //             .attr("marker-end", "url(#arrowhead)")

                //         donutGroup.append("line")
                //             .attr("class", "label-line")
                //             .attr("x1", -100)
                //             .attr("y1", -100)
                //             .attr("x2", -100)
                //             .attr("y2", 0)
                //             .attr("stroke", "black")
                //             .attr("stroke-width", 3)
                //             .attr("marker-end", "url(#arrowhead)")
                        
                //         donutGroup.append("text")
                //             .attr("class", "label-text")
                //             .attr("x", -260)
                //             .attr("y", 30)
                //             .attr("text-anchor", "start")
                //             .attr("font-size", "34px")
                //             .attr("font-weight", "bold")
                //             .text("ROLW = 30");
                        
                //         donutGroup.append("text")
                //             .attr("class", "label-text")
                //             .attr("x", -10)
                //             .attr("y", 30)
                //             .attr("text-anchor", "start")
                //             .attr("font-size", "34px")
                //             .attr("font-weight", "bold")
                //             .text("1");
                //     }

                //     const firstBlackOuterStroke = donutGroup.selectAll("path.outer-stroke")
                //         .filter(function() {
                //             return d3.select(this).attr("stroke") === "black";
                //         })
                //         .nodes()[0];

                //     if (firstBlackOuterStroke) {
                //         // Get the centroid of this path to position our line
                //         const firstData = d3.select(firstBlackOuterStroke).datum();
                //         const angle = (firstData.startAngle + firstData.endAngle) / 2;
                //         const radius = outerArc.outerRadius()();
                        
                //         // Calculate line start point (on the inner edge of the inner stroke)
                //         const lineStartX = Math.sin(angle) * radius;
                //         const lineStartY = -Math.cos(angle) * radius;
                        
                //         // Calculate line end point (offset inward and to side)
                //         const lineEndX = 350
                //         const lineEndY = -450
                        
                //         // Add the line
                //         donutGroup.append("line")
                //                     .attr("class", "label-line")
                //                     .attr("x1", lineStartX)
                //                     .attr("y1", lineStartY)
                //                     .attr("x2", lineEndX)
                //                     .attr("y2", lineEndY)
                //                     .attr("stroke", "black")
                //                     .attr("stroke-width", 3)
                //                     // .attr("marker-end", "url(#arrowhead)");

                //         donutGroup.append("line")
                //                     .attr("class", "label-line")
                //                     .attr("x1", lineEndX)
                //                     .attr("y1", lineEndY)
                //                     .attr("x2", 400)
                //                     .attr("y2", lineEndY)
                //                     .attr("stroke", "black")
                //                     .attr("stroke-width", 3)
                //                     .attr("marker-end", "url(#arrowhead)")
                        
                //         // Add the text label
                //         donutGroup.append("text")
                //             .attr("class", "label-text")
                //             .attr("x", 410)
                //             .attr("y", -440)
                //             .attr("text-anchor", lineStartX < 0 ? "end" : "start")
                //             .attr("dominant-baseline", "middle")
                //             .attr("font-size", "34px")
                //             .attr("font-weight", "bold")
                //             .text("HIO");
                //     }
                // }, 100);



                // const donutGroup2 = svg.append("g")
                // .attr("transform", `translate(${540}, ${-40})`);

                // // Add the main arcs
                // donutGroup2.selectAll("g.arc-group")
                //     .data(pie(donutArray))
                //     .enter()
                //     .append("g")
                //     .attr("class", "arc-group")
                //     .each(function(d) {
                //         const group = d3.select(this);

                //         // Full arc (grey if CDFdifference is undefined)
                //         group.append("path")
                //             .attr("class", "main")
                //             .attr("d", arc(d))
                //             .attr("fill", d.data.CDFdifference === undefined ? "grey" : d.data.interventionColor)
                //             .attr("stroke", "black")
                //             .style("stroke-width", "2px");

                //         // Add a thin horizontal sliver along the outer radius
                //         if (d.data.CDFdifference === undefined) {
                //             group.append("path")
                //                 .attr("class", "overlay")
                //                 .attr("d", sliverArc(d)) // Uses a very thin band at the outer edge
                //                 .attr("fill", d.data.interventionColor)
                //                 .attr("stroke", "black")
                //                 .style("stroke-width", "1px");
                //         }
                //     });

                // // Add the lifted inner strokes for negative weights
                // donutGroup2.selectAll("path.inner-stroke")
                // .data(pie(donutArray))
                // .enter().append("path")
                // .attr("class", "inner-stroke")
                // .attr("d", innerArc)
                // .attr("fill", "none")
                // .attr("stroke", d => d.data.weight < 0 ? "black" : "white")
                // .style("stroke-width", "10px");

                // // Add the lifted outer strokes for positive weights
                // donutGroup2.selectAll("path.outer-stroke")
                // .data(pie(donutArray))
                // .enter().append("path")
                // .attr("class", "outer-stroke")
                // .attr("d", outerArc)
                // .attr("fill", "none")
                // .attr("stroke", d => d.data.weight > 0 ? "black" : "white")
                // .style("stroke-width", "10px");

                // // Define a smaller radius for the inner pie (make sure it's positive and not too small)
                // // const innerPieRadius = Math.max(30, innerRadius * 0.6); // Adjust these values as needed

                // // Create the inner pie arc generator
                // const innerPieArc = d3.arc()
                //     .innerRadius(radius * 0.1)
                //     .outerRadius(radius * 1.5);

                // donutGroup2.selectAll("text.difference-symbol")
                //         .data(pie(donutArray))
                //         .enter()
                //         .append("text")
                //         .attr("class", "difference-symbol")
                //         .attr("transform", d => {
                //             // Calculate position at the center of where each arc would be
                //             const centroid = innerPieArc.centroid(d);
                //             return `translate(${centroid[0]}, ${centroid[1]})`;
                //         })
                //         .style("text-anchor", "middle")
                //         .style("dominant-baseline", "middle")
                //         .style("font-size", "50px")
                //         .style("font-weight", "bold")
                //         .style("fill", "black")
                //         .text(d => {
                //             // Determine symbol based on CDFdifference
                //             // console.log(d.data.CDFdifference)
                //             if (d.data.CDFdifference === "good") {
                //                 return "+";
                //             } else if (d.data.CDFdifference === "bad") {
                //                 return "-";
                //             } else {
                //                 return ""; // Show nothing if CDFdifference is 0
                //             }
                //         });



                // Create bar code chart (bottom 40%)
                const barWidth = (width / barcodeArray.length) - 4;
                let barcodechartwidth = barWidth * barcodeArray.length
                let availablespace = (width - barcodechartwidth)/2

                let startingpoint = -575 + availablespace - 540
                const barcodeGroup = svg.append("g")
                .attr("transform", `translate(${startingpoint}, ${500})`);

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
                .style("opacity", 0)


                let startingpoint2 = -575 + availablespace + 540
                const barcodeGroup2 = svg.append("g")
                .attr("transform", `translate(${startingpoint2}, ${500})`);

                // Create bars
                // barcodeGroup2.selectAll("rect")
                // .data(barcodeArray)
                // .enter().append("rect")
                // .attr("x", (d, i) => i * barWidth)
                // .attr("y", 0)
                // .attr("width", barWidth - 1) // -1 for spacing between bars
                // .attr("height", barcodeHeight/10)
                // .attr("fill", d => {
                //     if (d.CDFdifference == undefined){
                //         return "grey"
                //     }
                //     return d.interventionColor
                // })
                // .attr("stroke", "black")
                // .style("stroke-width", "1px");

                // barcodeGroup2.selectAll("line")
                // .data(barcodeArray)
                // .enter().append("line")
                // .attr("x1", (d, i) => i * barWidth)  // Center of each bar
                // .attr("x2", (d, i) => i * barWidth + barWidth - 2)
                // .attr("y1", d => d.weight < 0 ? -10 : barcodeHeight/10 + 10)  // Lift 10px from top or bottom
                // .attr("y2", d => d.weight < 0 ? -10 : barcodeHeight/10 + 10)
                // .attr("stroke", "black")
                // .attr("stroke-width", "4px")
                // .attr("stroke-linecap", "round");

                // let startingpoint3 = -575 + availablespace + 540
                // const barcodeGroup3 = svg.append("g")
                // .attr("transform", `translate(${startingpoint3}, ${570})`);

                // barcodeGroup3.selectAll("text.barcode-symbol")
                //             .data(barcodeArray)
                //             .enter()
                //             .append("text")
                //             .attr("class", "barcode-symbol")
                //             .attr("x", (d, i) => i * barWidth + barWidth/2) // Center the text in the position where the rectangle would be
                //             .attr("y", barcodeHeight/30) // Position at the vertical center of where the rectangle would be
                //             .attr("text-anchor", "middle") // Center text horizontally
                //             .attr("dominant-baseline", "middle") // Center text vertically
                //             .attr("fill", "black") // Use the same color as before, with black as fallback
                //             .style("font-size", "30px")
                //             .style("font-weight", "bold")
                //             .text(d => {
                                
                //                 // Determine symbol based on CDFdifference
                //                 if (d.CDFdifference === "good") {
                //                     return "+";
                //                 } else if (d.CDFdifference === "bad") {
                //                     return "-";
                //                 } else {
                //                     return ""; // Show nothing if CDFdifference is 0
                //                 }
                //             });


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

                

                // barcodeGroup3.selectAll("rect")
                // .data(barcodeArray)
                // .enter().append("rect")
                // .attr("x", (d, i) => i * barWidth)
                // .attr("y", 0)
                // .attr("width", barWidth - 1) // -1 for spacing between bars
                // .attr("height", barcodeHeight/15)
                // .attr("fill", d => d.colorDifference)
                // .attr("stroke", "black")
                // .style("stroke-width", d => {
                //     return "1px"
                //     // console.log(d.colorDifference)
                //     // if (d.colorDifference === 'rgb(255, 255, 255)'){
                //     //     return "1px"
                //     // }
                //     // else{
                //     //     return "5px"
                //     // }
                // });
            }
            // if (i === 4){

            //     let curatedPresentTaxons = []
            //     for (let i = 0; i < presentTaxons.length; i++){
            //         let nodeName = presentTaxons[i]
            //         let lastIndex = nodeName.lastIndexOf('__')
            //         let firstIndex = nodeName.indexOf('__')
            //         let taxonName = nodeName.substring(firstIndex+2, lastIndex)
            //         curatedPresentTaxons.push(taxonName)
            //     }

            //     transformedData = transformedData.filter(obj => curatedPresentTaxons.includes(obj.organism));
            //     // console.log(transformedData)
            //     console.log(this.structureData[4])

            //     const bivariateColorScaleLIO = (value) => {
            //         if (value <= 0.5) {
            //             return d3.interpolateRgb("darkred", "rgb(255, 200, 200)")(value / 0.5);
            //         } else {
            //             return d3.interpolateRgb("rgb(220, 230, 255)", "lightblue")((value - 0.51) / (1 - 0.51));
            //         }
            //     };

            //     const bivariateColorScaleHIO = (value) => {
            //         if (value <= 0.5) {
            //             return d3.interpolateRgb("lightblue", "rgb(220, 230, 255)")(value / 0.5);
            //         } else {
            //             return d3.interpolateRgb("rgb(255, 200, 200)", "darkred")((value - 0.51) / (1 - 0.51));
            //         }
            //     };

            //     const newArray = [];

            //     // let countofArray = 0
            //     for (const obj of transformedData) {
            //         if (obj.weight < 0){
            //             let sampleCDF = findTaxonCDFbyName(that.structureData[4], obj.organism)

            //             if (obj.ncbi_taxon_id === '216851'){
            //                 console.log('SampleCDF: ', sampleCDF)
            //             }
                        
            //             if (sampleCDF == null){
            //                 sampleCDF = '0'
            //                 let colorRGB = bivariateColorScaleLIO(sampleCDF)
            //                 newArray.push({
            //                     organism: obj.organism,
            //                     ncbi_taxon_id: obj.ncbi_taxon_id,
            //                     weight: obj.weight,
            //                     color: colorRGB
            //                 });
            //             }
            //             else{
            //                 // console.log('SampleCDF:', sampleCDF)
            //                 // console.log('organismLIO: ', obj.organism)
            //                 let colorRGB = bivariateColorScaleLIO(sampleCDF)
            //                 // console.log(colorRGB)
            //                 newArray.push({
            //                     organism: obj.organism,
            //                     ncbi_taxon_id: obj.ncbi_taxon_id,
            //                     weight: obj.weight,
            //                     color: colorRGB
            //                 });
            //             }
            //         }
            //         else{
                        
            //             let sampleCDF = findTaxonCDFbyName(that.structureData[4], obj.organism)

                        
                        
            //             if (sampleCDF == null){
            //                 sampleCDF = '0'
            //                 let colorRGB = bivariateColorScaleHIO(sampleCDF)
            //                 newArray.push({
            //                     organism: obj.organism,
            //                     ncbi_taxon_id: obj.ncbi_taxon_id,
            //                     weight: obj.weight,
            //                     color: colorRGB
            //                 });
            //             }
            //             else{
            //                 // console.log('SampleCDF:', sampleCDF)
            //                 // console.log('organismHIO: ', obj.organism)
            //                 let colorRGB = bivariateColorScaleHIO(sampleCDF)
            //                 // console.log(colorRGB)
            //                 newArray.push({
            //                     organism: obj.organism,
            //                     ncbi_taxon_id: obj.ncbi_taxon_id,
            //                     weight: obj.weight,
            //                     color: colorRGB
            //                 });
            //             }
            //         }
            //     }

            //     newArray.sort((a, b) => Math.abs(b.weight) - Math.abs(a.weight));
            //     console.log(newArray)

            //     // Split the array into two parts
            //     const donutArray = newArray.slice(0, 30);
            //     const barcodeArray = newArray.slice(30);

            //     // Calculate the total height distribution
            //     const totalHeight = 1220;  // Updated height
            //     const donutHeight = totalHeight * 0.6;
            //     const barcodeHeight = totalHeight * 0.4;
            //     const width = 1150;  // Updated width

            //     // Set up the donut chart (top 60%)
            //     const radius = (donutHeight / 2) - 30;

            //     // Normalize weights for donut
            //     const totalWeight = d3.sum(donutArray, d => Math.abs(d.weight));
            //     const normalizedWeights = donutArray.map(d => Math.abs(d.weight) / totalWeight);

            //     const pie = d3.pie()
            //     .value((d, i) => normalizedWeights[i])
            //     .sort(null);

            //     const arc = d3.arc()
            //     .innerRadius(radius * 0.6)
            //     .outerRadius(radius);

            //     const innerArc = d3.arc()
            //     .innerRadius(radius * 0.57)
            //     .outerRadius(radius * 0.57)
            //     .cornerRadius(0);

            //     const outerArc = d3.arc()
            //     .innerRadius(radius * 1.03)
            //     .outerRadius(radius * 1.03)
            //     .cornerRadius(0);

            //     // Create a group for the donut chart and translate it to the top section
            //     const donutGroup = svg.append("g")
            //     .attr("transform", `translate(${0}, ${-220})`);

            //     // Add the main arcs
            //     donutGroup.selectAll("path.main")
            //     .data(pie(donutArray))
            //     .enter().append("path")
            //     .attr("class", "main")
            //     .attr("d", arc)
            //     .attr("fill", d => d.data.color)
            //     .attr("stroke", "#fff")
            //     .style("stroke-width", "2px");

            //     // Add the lifted inner strokes for negative weights
            //     donutGroup.selectAll("path.inner-stroke")
            //     .data(pie(donutArray))
            //     .enter().append("path")
            //     .attr("class", "inner-stroke")
            //     .attr("d", innerArc)
            //     .attr("fill", "none")
            //     .attr("stroke", d => d.data.weight < 0 ? "black" : "white")
            //     .style("stroke-width", "10px");

            //     // Add the lifted outer strokes for positive weights
            //     donutGroup.selectAll("path.outer-stroke")
            //     .data(pie(donutArray))
            //     .enter().append("path")
            //     .attr("class", "outer-stroke")
            //     .attr("d", outerArc)
            //     .attr("fill", "none")
            //     .attr("stroke", d => d.data.weight > 0 ? "black" : "white")
            //     .style("stroke-width", "10px");

            //     // Create bar code chart (bottom 40%)
            //     const barWidth = (width / barcodeArray.length) - 5;
            //     const barcodeGroup = svg.append("g")
            //     .attr("transform", `translate(-500, ${200})`);

            //     // Create bars
            //     barcodeGroup.selectAll("rect")
            //     .data(barcodeArray)
            //     .enter().append("rect")
            //     .attr("x", (d, i) => i * barWidth)
            //     .attr("y", 0)
            //     .attr("width", barWidth - 1) // -1 for spacing between bars
            //     .attr("height", barcodeHeight/2)
            //     .attr("fill", d => d.color)
            //     .attr("stroke", "#fff")
            //     .style("stroke-width", "1px");


            //     barcodeGroup.selectAll("line")
            //     .data(barcodeArray)
            //     .enter().append("line")
            //     .attr("x1", (d, i) => i * barWidth)  // Center of each bar
            //     .attr("x2", (d, i) => i * barWidth + barWidth)
            //     .attr("y1", d => d.weight < 0 ? -10 : barcodeHeight/2 + 10)  // Lift 10px from top or bottom
            //     .attr("y2", d => d.weight < 0 ? -10 : barcodeHeight/2 + 10)
            //     .attr("stroke", "black")
            //     .attr("stroke-width", "4px")
            //     .attr("stroke-linecap", "round");
            // }
        }
    }


}