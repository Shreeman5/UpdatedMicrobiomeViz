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
        let width = 2400
        let height = 1300
        let svg = d3.select(".dynamic-div-x3" ).append("svg")
        .attr("width", width)
        .attr("height", height)

        const buttonGroup = svg.append("g")
            .attr("class", "control-button")  // Different class, won't get cleared
            .attr("transform", "translate(900, 1180)")
            .style("cursor", "pointer")
            .on("click", nextState);

        // Button background rectangle
        buttonGroup.append("rect")
            .attr("width", 600)
            .attr("height", 80)
            .attr("rx", 6)  // Rounded corners
            .attr("fill", "#3498db")
            .attr("stroke", "#2980b9")
            .attr("stroke-width", 1);

        // Button text
        buttonGroup.append("text")
            .attr("x", 10)  // Center horizontally
            .attr("y", 50)  // Center vertically
            .attr("text-anchor", "start")
            .attr("fill", "white")
            .attr("font-size", "40px")
            .attr("font-family", "Arial, sans-serif")
            .text("Click to learn more about legend");


        // Updated data for 5 donuts in first column
        const circleData = [
            { id: 1, radius: 80, 
                label: "The first arc always starts at 6 'o' clock but may stop anywhere in the donut. In this example tutorial, it stops at 12 'o' clock but that might be different for other examples. Notice that the arc is going counter-clockwise from 6 to 12 'o' clock. The first arc always has the biggest size. The first arc contains the microorganism that is found most frequently in disease literature. Therefore, the first arc contains the most important organism.", 
                startAngle: Math.PI, endAngle: 0}, 
            { id: 2, radius: 80, label: "The second arc starts wherever the first arc ends. The second arc has the second biggest size. The second arc contains the second most important organism.", 
                startAngle: 0, endAngle: 3*Math.PI/2, inverted: true}, // 3 to 12 o'clock (270°)
            { id: 3, radius: 80, label: "As you can see, importance of organism decreases counter-clockwise. The third arc contains the third most important organism.", 
                startAngle: 3*Math.PI/2, endAngle: 5*Math.PI/4 }, // 3 to 7:30 (225°)  
            { id: 4, radius: 80, label: "The fourth arc contains the fourth most important organism.", 
                startAngle: 5*Math.PI/4, endAngle: 9*Math.PI/8 }, // 3 to 6:45 (157.5°)
            { id: 5, radius: 80, label: "The strip beneath the donut contains organisms that are not as important. In this example, 5 organisms from the donut are shown in the strip. Organisms in the strip are ordered left to right in terms of importance. The donut contains organisms that are the most important. In this tutorial, the donut contains 4 and the strip contains 5 organism. In other examples, the split may be different.", 
                startAngle: 9*Math.PI/8, endAngle: Math.PI} // 3 to 1:30 (45°)
        ];
        
        // Second row donuts data (separate from first column)
        const secondRowDonuts = [
            { id: 11, radius: 80, 
                label: "Really dark red color indicates that this organism from this example matches the organism profile of a diseased sample.", 
                startAngle: Math.PI, endAngle: 0, arcColor: "darkred", bgColor: "white"}, 
            { id: 12, radius: 80, 
                label: "Blue indicates that this organism from this example does not match the organism profile of a disease sample.", 
                startAngle: 0, endAngle: 3*Math.PI/2, inverted: true, arcColor: "white", bgColor: "rgb(210, 215, 255)"}, 
            { id: 13, radius: 80, 
                label: "Light red color indicates that this organism from this sample somewhat matches the organism profile of a diseased sample.", 
                startAngle: 3*Math.PI/2, endAngle: 5*Math.PI/4, arcColor: "rgb(225, 200, 200)", bgColor: "white"}
        ];

        let currentState = 1;
        let currentSentenceIndex = 0;
        let totalSentences = 0;
        let secondColumnStep = 0; // Track second column progression
        let thirdColumnStep = 0; // Track third column progression
        const totalStates = 5; // Updated to include third column

        // Prepare sentence data for progressive disclosure
        const sentenceData = [];
        circleData.forEach((donut, donutIdx) => {
            const sentences = donut.label.split(/[.!?]+/).filter(s => s.trim().length > 0);
            sentences.forEach((sentence, sentenceIdx) => {
                sentenceData.push({
                    donutIndex: donutIdx,
                    sentenceIndex: sentenceIdx,
                    text: sentence.trim() + (sentenceIdx < sentences.length - 1 ? "." : ""),
                    donutY: 25 + donutIdx * 80, // Y position for this donut's text
                    isFirstSentenceOfDonut: sentenceIdx === 0
                });
            });
        });
        totalSentences = sentenceData.length;

        function updateStateIndicator() {
            const indicators = [
                "State 1: First Column of Circles",
                `State 2: Explanations (Sentence ${currentSentenceIndex + 1}/${totalSentences})`, 
                "State 3: + Second Column of Circles (Legend shown)",
                `State 4: + Explanations for Second Column (Step ${secondColumnStep + 1}/7) - Next: ${getNextStepDescription()}`,
                `State 5: + Third Column (Step ${thirdColumnStep + 1}/4) - Next: ${getThirdColumnNextStepDescription()}`
            ];
            console.log(indicators[currentState - 1]); // You can update a UI element here
        }

        function getNextStepDescription() {
            const descriptions = [
                "Second Row Donut 1",
                "Second Row Donut 2", 
                "Second Row Donut 3",
                "Third Row Donut+Strip 1",
                "Third Row Donut+Strip 2",
                "Third Row Donut+Strip 3",
                "Complete - Move to Third Column"
            ];
            return descriptions[secondColumnStep] || "Unknown";
        }

        function getThirdColumnNextStepDescription() {
            const descriptions = [
                "Third Column Text 1",
                "Third Column Donut+Strip 2", 
                "Third Column Text 2",
                "Complete - Reset to State 1"
            ];
            return descriptions[thirdColumnStep] || "Unknown";
        }

        function nextState() {
            if (currentState === 2) {
                // We're in explanation mode, advance sentence by sentence
                currentSentenceIndex++;
                if (currentSentenceIndex >= totalSentences) {
                    // All sentences shown, move to next state
                    currentState = 3;
                    currentSentenceIndex = 0;
                    secondColumnStep = 0; // Reset second column step
                }
            } else if (currentState === 4) {
                // We're in second column explanation mode
                // Check if we've completed all steps after the explanation runs
                if (secondColumnStep >= 6) {
                    // All second column steps shown, move to third column
                    currentState = 5;
                    thirdColumnStep = 0;
                } else {
                    secondColumnStep++;
                }
            } else if (currentState === 5) {
                // We're in third column mode
                if (thirdColumnStep >= 3) {
                    // All third column steps shown, cycle back to state 1
                    currentState = 1;
                    thirdColumnStep = 0;
                    secondColumnStep = 0;
                } else {
                    thirdColumnStep++;
                }
            } else {
                // Normal state progression
                currentState = currentState % totalStates + 1;
                if (currentState === 2) {
                    currentSentenceIndex = 0; // Reset when entering explanation mode
                } else if (currentState === 3) {
                    secondColumnStep = 0; // Reset when entering second column
                } else if (currentState === 4) {
                    secondColumnStep = 1;
                } else if (currentState === 5) {
                    thirdColumnStep = 0; // Reset when entering third column
                }
            }
            updateStateIndicator();
            renderCurrentState();
        }

        function renderCurrentState() {
            switch(currentState) {
                case 1:
                    // Only clear OUR elements, not everything
                    svg.selectAll(".progressive-disclosure").remove();
                    secondColumnStep = 0;
                    thirdColumnStep = 0;
                    renderFirstColumn();
                    break;
                case 2:
                    addFirstColumnExplanations();
                    break;
                case 3:
                    addSecondColumn();
                    break;
                case 4:
                    addSecondColumnExplanations();
                    break;
                case 5:
                    addThirdColumnExplanations();
                    break;
            }
        }

        // Helper function to wrap text within constraints
        function wrapText(text, maxWidth) {
            const words = text.split(' ');
            const lines = [];
            let currentLine = '';
            
            for (let word of words) {
                const testLine = currentLine + (currentLine ? ' ' : '') + word;
                if (testLine.length * 8 < maxWidth) { // Rough character width estimation
                    currentLine = testLine;
                } else {
                    if (currentLine) lines.push(currentLine);
                    currentLine = word;
                }
            }
            if (currentLine) lines.push(currentLine);
            return lines.slice(0, 9); // Limit to 9 lines
        }

        function renderFirstColumn() {
            // Create arc generator for donuts
            const arc = d3.arc()
                .innerRadius(d => d.radius * 0.6)
                .outerRadius(d => d.radius)
                .startAngle(d => d.startAngle)
                .endAngle(d => d.endAngle);

            // Create FULL donut backgrounds using arc generator
            const fullDonutArc = d3.arc()
                .innerRadius(d => d.radius * 0.6)
                .outerRadius(d => d.radius)
                .startAngle(0)               // Full circle
                .endAngle(2 * Math.PI);      // Full circle

            // Create donut backgrounds (full donuts)
            const donutBgs = svg.selectAll(".donut-bg-col1")
                .data(circleData)
                .enter()
                .append("path")
                .attr("class", "donut-bg donut-bg-col1 progressive-disclosure")
                .attr("transform", (d, i) => `translate(${80}, ${80 + i * 250})`)
                .attr("d", fullDonutArc)
                .attr("fill", d => d.inverted ? "black" : "white")       // Changed to white
                .attr("stroke", "black")     // Added black stroke
                .attr("stroke-width", 2)     // Added stroke width
                .attr("opacity", 0);

            // Create black arcs (same as before)
            const arcs = svg.selectAll(".arc-col1")
                .data(circleData)
                .enter()
                .append("path")
                .attr("class", "arc arc-col1 progressive-disclosure")
                .attr("transform", (d, i) => `translate(${80}, ${80 + i * 250})`)
                .attr("d", arc)
                .attr("fill", d => d.inverted ? "white" : "black")
                .attr("opacity", 1);  // Set to 1 immediately, no animation

            // Animate donut backgrounds
            donutBgs.transition()
                .duration(800)
                .delay((d, i) => i * 200)
                .attr("opacity", 1)          // Changed from attr("r") to attr("opacity")
                .ease(d3.easeBounceOut);

            // Special treatment for the bottom donut (index 4) - add barcode
            addBarcodeToBottomDonut();
        }

        function addBarcodeToBottomDonut() {
            const bottomDonutIndex = 4; // 5th donut (index 4)
            const donutY = 80 + bottomDonutIndex * 250; // Match your 250px spacing
            const donutX = 80; // Updated X position (200 - 120)
            const donutRadius = circleData[bottomDonutIndex].radius;
            
            // Barcode positioning
            const barcodeY = donutY + donutRadius + 40; // 40px below the donut
            const barcodeWidth = 150; // Wider for barcode strip
            const barcodeHeight = 30;
            const barcodeX = donutX - barcodeWidth / 2; // Center under donut
            
            // Create 5 equal-width rectangles
            const numRects = 5;
            const rectWidth = (barcodeWidth - 4) / numRects; // Subtract 4px for padding (2px each side)
            const barcodeData = Array.from({length: numRects}, (_, i) => ({id: i}));
            
            const barcodeRects = svg.selectAll(".barcode-rect")
                .data(barcodeData)
                .enter()
                .append("rect")
                .attr("class", "barcode-rect progressive-disclosure")
                .attr("x", (d, i) => barcodeX + 2 + (i * rectWidth)) // 2px padding + index * width
                .attr("y", barcodeY + 2) // Small padding from top
                .attr("width", rectWidth)
                .attr("height", barcodeHeight - 4) // Full height minus padding
                .attr("fill", "white")        // White background
                .attr("stroke", "black")      // Black stroke
                .attr("stroke-width", 1)      // Stroke width
                .attr("opacity", 0);
            

            // Create connecting lines to the LEFT and RIGHT edges of the barcode
            const connectingLines = svg.selectAll(".connecting-line")
                .data([
                    {x1: 50, y1: 1155, x2: barcodeX + 1, y2: barcodeY + barcodeHeight/2 - 14},           // Left line - moved 120px left
                    {x1: 80, y1: 1160, x2: barcodeX + barcodeWidth - 1, y2: barcodeY + barcodeHeight/2 - 14}  // Right line - moved 120px left
                ])
                .enter()
                .append("line")
                .attr("class", "connecting-line progressive-disclosure")
                .attr("x1", d => d.x1)
                .attr("y1", d => d.y1)
                .attr("x2", d => d.x1) // Start at same position for animation
                .attr("y2", d => d.y1)
                .attr("stroke", "black")
                .attr("stroke-width", 2)
                .attr("stroke-dasharray", "3,3")
                .attr("opacity", 0);
            
            // Animate everything appearing
            setTimeout(() => {
                // Remove this line: barcodeBackground.transition().duration(400).attr("opacity", 1);
                barcodeRects.transition().duration(600).delay((d, i) => i * 100).attr("opacity", 1);
                connectingLines.transition()
                    .duration(800)
                    .delay(300)
                    .attr("x2", d => d.x2)
                    .attr("y2", d => d.y2)
                    .attr("opacity", 1);
            }, 1000);
        }

        function addFirstColumnExplanations() {
            // Remove any existing explanation text
            svg.selectAll(".explanation-text-col1").remove();
            
            // Get sentences up to current index
            const sentencesToShow = sentenceData.slice(0, currentSentenceIndex + 1);
            
            // Group sentences by donut
            const sentencesByDonut = {};
            sentencesToShow.forEach(sentence => {
                if (!sentencesByDonut[sentence.donutIndex]) {
                    sentencesByDonut[sentence.donutIndex] = [];
                }
                sentencesByDonut[sentence.donutIndex].push(sentence);
            });
            
            // Create text groups for each donut that has sentences to show
            Object.keys(sentencesByDonut).forEach(donutIndex => {
                const donutSentences = sentencesByDonut[donutIndex];
                const donutIdx = parseInt(donutIndex);
                
                const textGroup = svg.append("text")
                    .attr("class", "explanation-text explanation-text-col1 progressive-disclosure")
                    .attr("x", 170)
                    .attr("y", 25 + donutIdx * 250)
                    .attr("text-anchor", "start")
                    .attr("fill", "#2c3e50")
                    .attr("font-size", "20px")
                    .attr("font-weight", "bold");
                
                // Add each sentence as a tspan
                donutSentences.forEach((sentence, i) => {
                    const tspan = textGroup.append("tspan")
                        .attr("x", 170)
                        .attr("dy", i === 0 ? 0 : "1.2em")
                        .text(sentence.text);
                    
                    // Animate the latest sentence if it's the current one being added
                    if (sentencesToShow.length > 0 && 
                        sentence === sentencesToShow[sentencesToShow.length - 1]) {
                        tspan.attr("opacity", 0)
                            .transition()
                            .duration(600)
                            .attr("opacity", 1);
                    } else {
                        tspan.attr("opacity", 1);
                    }
                });
            });
        }

        function addSecondColumn() {
            // Show the legend (step 0) when entering state 3
            showSecondColumnStep(0);
        }

        function addSecondColumnExplanations() {
            // Show the current step (steps 1-6)
            if (secondColumnStep <= 6) {
                showSecondColumnStep(secondColumnStep);
            }
            
            // Debug logging
            console.log(`Second column step: ${secondColumnStep}`);
        }

        function addThirdColumn() {
            // Show the first step when entering state 5
            showThirdColumnStep(0);
        }

        function addThirdColumnExplanations() {
            // Show the current step (steps 0-3)
            if (thirdColumnStep <= 3) {
                showThirdColumnStep(thirdColumnStep);
            }
            
            // Debug logging
            console.log(`Third column step: ${thirdColumnStep}`);
        }

        function showSecondColumnStep(step) {
            switch(step) {
                case 0:
                    // Step 1: Legend with text
                    showLegend();
                    break;
                case 1:
                    // Step 2: First donut of second row
                    showSecondRowDonut(0);
                    break;
                case 2:
                    // Step 3: Second donut of second row
                    showSecondRowDonut(1);
                    break;
                case 3:
                    // Step 4: Third donut of second row
                    showSecondRowDonut(2);
                    break;
                case 4:
                    // Step 5: First donut+strip of third row
                    showThirdRowDonut(0);
                    break;
                case 5:
                    // Step 6: Second donut+strip of third row
                    showThirdRowDonut(1);
                    break;
                case 6:
                    // Step 6: Second donut+strip of third row
                    showThirdRowDonut(2);
                    break;
            }
        }

        function showThirdColumnStep(step) {
            switch(step) {
                case 0:
                    // Show first donut+strip without text
                    showThirdColumnDonut(0, false);
                    break;
                case 1:
                    // Show text for first donut+strip
                    showThirdColumnDonut(0, true);
                    break;
                case 2:
                    // Show second donut+strip without text
                    showThirdColumnDonut(1, false);
                    break;
                case 3:
                    // Show text for second donut+strip
                    showThirdColumnDonut(1, true);
                    break;
            }
        }

        function showLegend() {
            const baseX = 1100;
            const firstRowY = 230; // Parallel with second donut from first column (80 + 1 * 250)
            const gradientWidth = 300;
            const gradientHeight = 30;
            
            // Create gradient definition
            const defs = svg.select("defs").empty() ? svg.append("defs") : svg.select("defs");
            const gradient = defs.append("linearGradient")
                .attr("id", "colorGradient")
                .attr("class", "progressive-disclosure");
            
            gradient.append("stop")
                .attr("offset", "0%")
                .attr("stop-color", "rgb(210, 215, 255)");
            gradient.append("stop")
                .attr("offset", "50%")
                .attr("stop-color", "rgb(210, 215, 255)");
            gradient.append("stop")
                .attr("offset", "51%")
                .attr("stop-color", "rgb(255, 200, 200)");
            gradient.append("stop")
                .attr("offset", "100%")
                .attr("stop-color", "darkred");

            // Create gradient rectangle
            const gradientRect = svg.append("rect")
                .attr("class", "gradient-legend progressive-disclosure")
                .attr("x", baseX - gradientWidth/2)
                .attr("y", firstRowY)
                .attr("width", gradientWidth)
                .attr("height", gradientHeight)
                .attr("fill", "url(#colorGradient)")
                .attr("stroke", "black")
                .attr("stroke-width", 2)
                .attr("opacity", 0);

            // Add legend text
            const legendText = svg.append("text")
                .attr("class", "legend-text progressive-disclosure")
                .attr("x", baseX)
                .attr("y", firstRowY + gradientHeight + 25)
                .attr("text-anchor", "middle")
                .attr("fill", "#2c3e50")
                .attr("font-size", "20px")
                .attr("font-weight", "bold")
                .attr("opacity", 0)
                .text("Color intensity represents organism prevalence in a sample.");
            
            const legendText2 = svg.append("text")
                .attr("class", "legend-text2 progressive-disclosure")
                .attr("x", baseX)
                .attr("y", firstRowY + gradientHeight + 50)
                .attr("text-anchor", "middle")
                .attr("fill", "#2c3e50")
                .attr("font-size", "20px")
                .attr("font-weight", "bold")
                .attr("opacity", 0)
                .text("Legend relevant for both donut and strip.");

            // Animate both appearing together
            gradientRect.transition().duration(800).attr("opacity", 1);
            legendText.transition().duration(800).attr("opacity", 1);
            legendText2.transition().duration(800).attr("opacity", 1);
        }

        function showSecondRowDonut(index) {
            const baseX = 1350;
            const secondRowY = 500;
            const donutSpacing = 350;
            const startX = baseX - donutSpacing; // Center the three donuts
            const maxTextWidth = 280;
            const lineHeight = 22;
            
            // Get the specific donut data from secondRowDonuts array
            const donutData = secondRowDonuts[index];
            const donutX = startX + index * donutSpacing;
            
            // Create arc generators
            const arc = d3.arc()
                .innerRadius(donutData.radius * 0.6)
                .outerRadius(donutData.radius)
                .startAngle(donutData.startAngle)
                .endAngle(donutData.endAngle);

            const fullDonutArc = d3.arc()
                .innerRadius(donutData.radius * 0.6)
                .outerRadius(donutData.radius)
                .startAngle(0)
                .endAngle(2 * Math.PI);

            // Create donut background
            const donutBg = svg.append("path")
                .attr("class", `donut-bg-row2-${index} progressive-disclosure`)
                .attr("transform", `translate(${donutX}, ${secondRowY})`)
                .attr("d", fullDonutArc)
                .attr("fill", donutData.bgColor || (donutData.inverted ? "black" : "white"))
                .attr("stroke", "black")
                .attr("stroke-width", 2)
                .attr("opacity", 0);

            // Create arc
            const arcPath = svg.append("path")
                .attr("class", `arc-row2-${index} progressive-disclosure`)
                .attr("transform", `translate(${donutX}, ${secondRowY})`)
                .attr("d", arc)
                .attr("fill", donutData.arcColor || (donutData.inverted ? "white" : "black"))
                .attr("opacity", 1);

            // Animate donut appearing
            donutBg.transition()
                .duration(600)
                .attr("opacity", 1)
                .ease(d3.easeBounceOut);

            // Add text below donut
            const textGroup = svg.append("g")
                .attr("class", `text-group-row2-${index} progressive-disclosure`)
                .attr("transform", `translate(${donutX}, ${secondRowY + 120})`);

            const wrappedLines = wrapText(donutData.label, maxTextWidth);
            
            // Add text lines with staggered animation
            wrappedLines.forEach((line, lineIndex) => {
                textGroup.append("text")
                    .attr("x", 0)
                    .attr("y", lineIndex * lineHeight)
                    .attr("text-anchor", "middle")
                    .attr("fill", "#2c3e50")
                    .attr("font-size", "20px")
                    .attr("font-weight", "bold")
                    .attr("opacity", 0)
                    .text(line)
                    .transition()
                    .duration(400)
                    .delay(600 + lineIndex * 100) // Start after donut animation
                    .attr("opacity", 1);
            });
        }

        function showThirdRowDonut(index) {
            const baseX = 1400;
            const thirdRowY = 800;
            const thirdRowSpacing = 450;
            const thirdRowStartX = baseX - thirdRowSpacing/2;
            const maxTextWidth = 350; // Increased like second row
            const lineHeight = 22; // Increased like second row
            
            // Define third row donut data with multiple arcs
            const thirdRowDonuts = [
                { 
                    id: 6, 
                    radius: 80, 
                    label: "Imagine that this donut and this strip contain organisms from an actual person. If the organisms in aggregate appear more red, this person is close to matching that disease profile. The person in this example has a matching profile to a given disease.", 
                    arcs: [
                        { startAngle: Math.PI, endAngle: 0, color: "darkred" }, // Red
                        { startAngle: 2*Math.PI, endAngle: Math.PI * 1.5, color: "rgb(210,215,255)" }, // Blue  
                        { startAngle: Math.PI * 1.5, endAngle: Math.PI * 1.25, color: "rgb(255,200,200)" }, // Green
                        { startAngle: Math.PI * 1.25, endAngle: Math.PI * 1.125, color: "rgb(174,60,60)" }, // Orange
                        { startAngle: Math.PI * 1.125, endAngle: Math.PI, color: "white" }  // Purple
                    ],
                    stripColors: ["rgb(192,92,92)", "rgb(176,64,64)", "rgb(192,92,92)", "rgb(210,215,255)", "rgb(210,215,255)"] // 4 rectangles
                },
                { 
                    id: 7, 
                    radius: 80, 
                    label: "In this example, the person does not have a matching profile to a given disease. That is because the organisms appear more blue in aggregate.", 
                    arcs: [
                        { startAngle: Math.PI, endAngle: 0, color: "rgb(210,215,255)" }, // Red
                        { startAngle: 2*Math.PI, endAngle: Math.PI * 1.5, color: "rgb(210,215,255)" }, // Blue  
                        { startAngle: Math.PI * 1.5, endAngle: Math.PI * 1.25, color: "rgb(176,64,64)" }, // Green
                        { startAngle: Math.PI * 1.25, endAngle: Math.PI * 1.125, color: "rgb(210,215,255)" }, // Orange
                        { startAngle: Math.PI * 1.125, endAngle: Math.PI, color: "white" }  // Purple
                    ],
                    stripColors: ["rgb(210,215,255)", "darkred", "rgb(210,215,255)", "rgb(192,92,92)", "rgb(210,215,255)"] // 4 rectangles
                },
                { 
                    id: 8, 
                    radius: 80, 
                    label: "In this example, we would say that the person does not have a matching profile to a given disease. Even though the organisms in the strip are colored dark red, we have to understand that the organisms in the donut are more important than the organisms in the strip. Since the donut organisms are blue, this example does not match a disease profile.", 
                    arcs: [
                        { startAngle: Math.PI, endAngle: 0, color: "rgb(210,215,255)" }, // Red
                        { startAngle: 2*Math.PI, endAngle: Math.PI * 1.5, color: "rgb(210,215,255)" }, // Blue  
                        { startAngle: Math.PI * 1.5, endAngle: Math.PI * 1.25, color: "rgb(210,215,255)" }, // Green
                        { startAngle: Math.PI * 1.25, endAngle: Math.PI * 1.125, color: "rgb(210,215,255)" }, // Orange
                        { startAngle: Math.PI * 1.125, endAngle: Math.PI, color: "white" }  // Purple
                    ],
                    stripColors: ["darkred", "darkred", "darkred", "darkred", "darkred"] // 4 rectangles
                }
            ];
            
            const donutData = thirdRowDonuts[index];
            const donutX = thirdRowStartX + index * thirdRowSpacing;
            
            // Create full donut background
            const fullDonutArc = d3.arc()
                .innerRadius(donutData.radius * 0.6)
                .outerRadius(donutData.radius)
                .startAngle(0)
                .endAngle(2 * Math.PI);

            // Create donut background
            const donutBg = svg.append("path")
                .attr("class", `donut-bg-row3-${index} progressive-disclosure`)
                .attr("transform", `translate(${donutX}, ${thirdRowY})`)
                .attr("d", fullDonutArc)
                .attr("fill", "white")
                .attr("stroke", "black")
                .attr("stroke-width", 2)
                .attr("opacity", 0);

            // Create multiple colored arcs
            donutData.arcs.forEach((arcData, arcIndex) => {
                const arc = d3.arc()
                    .innerRadius(donutData.radius * 0.6)
                    .outerRadius(donutData.radius)
                    .startAngle(arcData.startAngle)
                    .endAngle(arcData.endAngle);

                svg.append("path")
                    .attr("class", `arc-row3-${index}-${arcIndex} progressive-disclosure`)
                    .attr("transform", `translate(${donutX}, ${thirdRowY})`)
                    .attr("d", arc)
                    .attr("fill", arcData.color) // Individual color for each arc
                    .attr("stroke", "black")
                    .attr("stroke-width", 1)
                    .attr("opacity", 1);
            });

            // Create strip below donut with individual colors
            const stripY = thirdRowY + donutData.radius + 40;
            const stripWidth = 120;
            const stripHeight = 25;
            const stripX = donutX - stripWidth / 2;
            
            // Create 4 rectangles for strip with individual colors
            const numRects = 5;
            const rectWidth = (stripWidth - 4) / numRects;
            
            for (let i = 0; i < numRects; i++) {
                svg.append("rect")
                    .attr("class", `strip-rect-row3-${index}-${i} progressive-disclosure`)
                    .attr("x", stripX + 2 + (i * rectWidth))
                    .attr("y", stripY + 2)
                    .attr("width", rectWidth)
                    .attr("height", stripHeight - 4)
                    .attr("fill", donutData.stripColors[i]) // Individual color for each rectangle
                    .attr("stroke", "black")
                    .attr("stroke-width", 1)
                    .attr("opacity", 0)
                    .transition()
                    .duration(400)
                    .delay(400 + i * 100) // Stagger strip rectangles
                    .attr("opacity", 1);
            }

            // Create connecting lines from donut to strip (similar to first column barcode)
            const connectingLines = svg.selectAll(`.connecting-line-row3-${index}`)
                .data([
                    {x1: donutX - 30, y1: thirdRowY + 72, x2: stripX + 2, y2: stripY + stripHeight/2 - 8},           // Left line
                    {x1: donutX + 0, y1: thirdRowY + 80, x2: stripX + stripWidth - 1, y2: stripY + stripHeight/2 - 9}  // Right line
                ])
                .enter()
                .append("line")
                .attr("class", `connecting-line connecting-line-row3-${index} progressive-disclosure`)
                .attr("x1", d => d.x1)
                .attr("y1", d => d.y1)
                .attr("x2", d => d.x1) // Start at same position for animation
                .attr("y2", d => d.y1)
                .attr("stroke", "black")
                .attr("stroke-width", 2)
                .attr("stroke-dasharray", "3,3")
                .attr("opacity", 0);

            // Animate connecting lines
            connectingLines.transition()
                .duration(600)
                .delay(600)
                .attr("x2", d => d.x2)
                .attr("y2", d => d.y2)
                .attr("opacity", 1);

            // Animate donut appearing
            donutBg.transition()
                .duration(600)
                .attr("opacity", 1)
                .ease(d3.easeBounceOut);

            // Add text below strip
            const textGroup = svg.append("g")
                .attr("class", `text-group-row3-${index} progressive-disclosure`)
                .attr("transform", `translate(${donutX}, ${thirdRowY + 170})`);

            const wrappedLines = wrapText(donutData.label, maxTextWidth);
            
            // Add text lines with staggered animation
            wrappedLines.forEach((line, lineIndex) => {
                textGroup.append("text")
                    .attr("x", 0)
                    .attr("y", lineIndex * lineHeight)
                    .attr("text-anchor", "middle")
                    .attr("fill", "#2c3e50")
                    .attr("font-size", "20px") // Increased to match second row
                    .attr("font-weight", "bold")
                    .attr("opacity", 0)
                    .text(line)
                    .transition()
                    .duration(400)
                    .delay(800 + lineIndex * 100) // Start after donut and strip animations
                    .attr("opacity", 1);
            });
        }

        function showThirdColumnDonut(index, showText) {
            // Only take the first 2 donuts from thirdRowDonuts
            const thirdColumnDonuts = [
                { 
                    id: 9, 
                    radius: 50, 
                    label: "Here, we introduce High Indicator Organisms (HIOs). HIOs in the donut have a black outer arc. HIOs in the strip have an upper black line. In this visual, there are 4 HIOs, 2 red and 2 blue. As indicated by the name, HIOs exist in high abundance in disease samples. Therefore, if a sample has a high abundance of an HIO, that HIO will be colored some shade of red, otherwise it is colored blue.", 
                    arcs: [
                        { startAngle: Math.PI, endAngle: 0, color: "darkred" }, // Red
                        { startAngle: 2*Math.PI, endAngle: Math.PI * 1.5, color: "white" }, // Blue  
                        { startAngle: Math.PI * 1.5, endAngle: Math.PI * 1.25, color: "rgb(210,215,255)" }, // Green
                        { startAngle: Math.PI * 1.25, endAngle: Math.PI * 1.125, color: "white" }, // Orange
                        { startAngle: Math.PI * 1.125, endAngle: Math.PI, color: "white" }  // Purple
                    ],
                    stripColors: ["rgb(192,92,92)", "white", "rgb(210,215,255)", "white", "white"]
                },
                { 
                    id: 10, 
                    radius: 50, 
                    label: "We see Low Indicator Organisms (LIOs) here. LIOs have a black inner arc in the donut and a lower black line in the strip. In this visual, there are 2 LIOs, 2 red and 2 blue. As indicated by the name, LIOs exist in low abundance in disease samples. Therefore, if a sample has a low abundance of an LIO, that LIO will be colored some shade of red, otherwise it is colored blue. HIOs and LIOs are important because they help researchers figure out which HIOs to decrease abundance of and which LIOs to increase abundance of in a given sample.", 
                    arcs: [
                        { startAngle: Math.PI, endAngle: 0, color: "white" }, // Red
                        { startAngle: 2*Math.PI, endAngle: Math.PI * 1.5, color: "rgb(176,64,64)" }, // Blue  
                        { startAngle: Math.PI * 1.5, endAngle: Math.PI * 1.25, color: "white" }, // Green
                        { startAngle: Math.PI * 1.25, endAngle: Math.PI * 1.125, color: "rgb(210,215,255)" }, // Orange
                        { startAngle: Math.PI * 1.125, endAngle: Math.PI, color: "white" }  // Purple
                    ],
                    stripColors: ["white", "darkred", "white", "rgb(210,215,255)", "white"]
                }
            ];

            if (index >= thirdColumnDonuts.length) return; // Safety check
            
            const baseX = 1500; // Position third column further right
            const thirdColumnY = 60; // Centered vertically
            const thirdColumnSpacing = 200; // Vertical spacing between donuts
            const maxTextWidth = 660;
            const lineHeight = 22;
            
            const donutData = thirdColumnDonuts[index];
            const donutX = baseX;
            const donutY = thirdColumnY + index * thirdColumnSpacing;
            
            // Only create donut if it doesn't exist yet
            if (svg.select(`.donut-bg-col3-${index}`).empty()) {
                // Create full donut background
                const fullDonutArc = d3.arc()
                    .innerRadius(donutData.radius * 0.6)
                    .outerRadius(donutData.radius)
                    .startAngle(0)
                    .endAngle(2 * Math.PI);

                // Create donut background
                const donutBg = svg.append("path")
                    .attr("class", `donut-bg-col3-${index} progressive-disclosure`)
                    .attr("transform", `translate(${donutX}, ${donutY})`)
                    .attr("d", fullDonutArc)
                    .attr("fill", "white")
                    .attr("stroke", "black")
                    .attr("stroke-width", 2)
                    .attr("opacity", 0);

                // Create multiple colored arcs
                donutData.arcs.forEach((arcData, arcIndex) => {
                    const arc = d3.arc()
                        .innerRadius(donutData.radius * 0.6)
                        .outerRadius(donutData.radius)
                        .startAngle(arcData.startAngle)
                        .endAngle(arcData.endAngle);

                    svg.append("path")
                        .attr("class", `arc-col3-${index}-${arcIndex} progressive-disclosure`)
                        .attr("transform", `translate(${donutX}, ${donutY})`)
                        .attr("d", arc)
                        .attr("fill", arcData.color)
                        .attr("stroke", "black")
                        .attr("stroke-width", 1)
                        .attr("opacity", 1);
                });

                // Add HIO/LIO indicator arcs
                donutData.arcs.forEach((arcData, arcIndex) => {
                    if (arcData.color !== "white") {
                        const indicatorArc = d3.arc()
                            .innerRadius(index === 0 ? donutData.radius * 1.05 : donutData.radius * 0.45) // Outer for HIO, inner for LIO
                            .outerRadius(index === 0 ? donutData.radius * 1.15 : donutData.radius * 0.55) // Outer for HIO, inner for LIO
                            .startAngle(arcData.startAngle)
                            .endAngle(arcData.endAngle);

                        svg.append("path")
                            .attr("class", `indicator-arc-col3-${index}-${arcIndex} progressive-disclosure`)
                            .attr("transform", `translate(${donutX}, ${donutY})`)
                            .attr("d", indicatorArc)
                            .attr("fill", "black")
                            .attr("opacity", 1);
                    }
                });

                // Create strip below donut with individual colors
                const stripY = donutY + donutData.radius + 40;
                const stripWidth = 120;
                const stripHeight = 25;
                const stripX = donutX - stripWidth / 2;
                
                // Create 5 rectangles for strip with individual colors
                const numRects = 5;
                const rectWidth = (stripWidth - 4) / numRects;
                
                for (let i = 0; i < numRects; i++) {
                    svg.append("rect")
                        .attr("class", `strip-rect-col3-${index}-${i} progressive-disclosure`)
                        .attr("x", stripX + 2 + (i * rectWidth))
                        .attr("y", stripY + 2)
                        .attr("width", rectWidth)
                        .attr("height", stripHeight - 4)
                        .attr("fill", donutData.stripColors[i])
                        .attr("stroke", "black")
                        .attr("stroke-width", 1)
                        .attr("opacity", 0)
                        .transition()
                        .duration(400)
                        .delay(400 + i * 100)
                        .attr("opacity", 1);
                }

                // Create connecting lines from donut to strip
                const connectingLines = svg.selectAll(`.connecting-line-col3-${index}`)
                    .data([
                        {x1: donutX - 19, y1: donutY + 44, x2: stripX + 2, y2: stripY + stripHeight/2 - 8},
                        {x1: donutX + 0, y1: donutY + 50, x2: stripX + stripWidth - 1, y2: stripY + stripHeight/2 - 9}
                    ])
                    .enter()
                    .append("line")
                    .attr("class", `connecting-line connecting-line-col3-${index} progressive-disclosure`)
                    .attr("x1", d => d.x1)
                    .attr("y1", d => d.y1)
                    .attr("x2", d => d.x1)
                    .attr("y2", d => d.y1)
                    .attr("stroke", "black")
                    .attr("stroke-width", 2)
                    .attr("stroke-dasharray", "3,3")
                    .attr("opacity", 0);

                // Add HIO/LIO indicator lines for non-white rectangles
                for (let i = 0; i < numRects; i++) {
                    if (donutData.stripColors[i] !== "white") {
                        const lineY = index === 0 ? stripY - 2 : stripY + stripHeight + 2; // Upper for HIO, lower for LIO
                        
                        svg.append("line")
                            .attr("class", `indicator-line-col3-${index}-${i} progressive-disclosure`)
                            .attr("x1", stripX + 2 + (i * rectWidth))
                            .attr("y1", lineY)
                            .attr("x2", stripX + 2 + ((i + 1) * rectWidth))
                            .attr("y2", lineY)
                            .attr("stroke", "black")
                            .attr("stroke-width", 3)
                            .attr("opacity", 0)
                            .transition()
                            .duration(400)
                            .delay(400 + i * 100)
                            .attr("opacity", 1);
                    }
                }

                // Animate connecting lines
                connectingLines.transition()
                    .duration(600)
                    .delay(600)
                    .attr("x2", d => d.x2)
                    .attr("y2", d => d.y2)
                    .attr("opacity", 1);

                // Animate donut appearing
                donutBg.transition()
                    .duration(600)
                    .attr("opacity", 1)
                    .ease(d3.easeBounceOut);
            }

            // Add text if requested and doesn't exist yet
            if (showText && svg.select(`.text-group-col3-${index}`).empty()) {
                const textGroup = svg.append("g")
                    .attr("class", `text-group-col3-${index} progressive-disclosure`)
                    .attr("transform", `translate(${donutX + 75}, ${donutY - 30})`);

                const wrappedLines = wrapText(donutData.label, maxTextWidth);
                
                // Add text lines with staggered animation
                wrappedLines.forEach((line, lineIndex) => {
                    textGroup.append("text")
                        .attr("x", 0)
                        .attr("y", lineIndex * lineHeight)
                        .attr("text-anchor", "start")
                        .attr("fill", "#2c3e50")
                        .attr("font-size", "20px")
                        .attr("font-weight", "bold")
                        .attr("opacity", 0)
                        .text(line)
                        .transition()
                        .duration(400)
                        .delay(lineIndex * 100)
                        .attr("opacity", 1);
                });
            }
        }

        renderCurrentState();
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
                // .on("mouseover", function(event, d) {
                // if (d.data.weight !== 0) {
                //     // Get mouse position relative to the SVG
                //     const [mouseX, mouseY] = d3.pointer(event);
                    
                //     // Create tooltip box
                //     const tooltip = svg.append("g")
                //     .attr("class", "donut-tooltip-box")
                    
                    
                    
                //     // Add rectangle background
                //     tooltip.append("rect")
                //     .attr("x", mouseX - 500)
                //     .attr("y", mouseY + 10)
                //     .attr("width", 225)
                //     .attr("height", 50)
                //     .attr("fill", "white")
                //     .attr("stroke", "black")
                //     .attr("stroke-width", 1)
                //     .attr("rx", 5)
                //     .attr("ry", 5)
                    
                //     // Add text inside the box
                //     const tooltipText = d.data.weight > 0 ? "This is an HIO" : "This is an LIO";
                //     tooltip.append("text")
                //     .attr("x", mouseX - 500)
                //     .attr("y", mouseY + 40)
                //     .attr("font-size", "35")
                //     .attr("fill", "black")
                //     .text(tooltipText);
                // }
                // })
                // .on("mouseout", function() {
                // // Remove tooltip when not hovering
                // svg.selectAll(".donut-tooltip-box").remove();
                // });

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