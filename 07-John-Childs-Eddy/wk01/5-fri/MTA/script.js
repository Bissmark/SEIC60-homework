// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

// const nLine = [`Times Square`, `34th`, `28th`, `23rd`, `Union Square`, `8th`]
// const lLine = [`10th`, `6th`, `Union Square`, `3rd`, `1st`]
// const sixLine = [`Grand Central`, `63rd`, `88th`, `53rd`, `Union Square`, `Astor Place`]

// const depart = `Times Square`;
// const arrive = `23rd`;

// if ( nLine.indexOf(depart) < nLine.indexOf(arrive) ) {

// const numberOfStops = () => {
//     counter = 0;
//     for ( let i = nLine.indexOf(depart) + 1; i < nLine.indexOf(arrive); i++ ) {
//     counter += 1;
//     }
//     return counter;
// }

// console.log(`There are ` + numberOfStops() + ` stops until you get off the train.`);

// const nameOfStops = () => {
//     names = ``;
//     for ( let i = nLine.indexOf(depart) + 1; i < nLine.indexOf(arrive); i++ ) {
//     names = nLine[i];
//     console.log(names);
//         }
//     }
// console.log(nameOfStops());
// }
//     else if ( nLine.indexOf(depart) > nLine.indexOf(arrive) ) {

//     const numberOfStops = () => {
//         counter = 0;
//         for ( let i = nLine.indexOf(arrive) + 1; i < nLine.indexOf(depart); i++ ) {
//         counter += 1;
//         }
//         return counter;
//     }
    
//     console.log(`There are ` + numberOfStops() + ` stops until you get off the train.`);
    
//     const nameOfStops = () => {
//         names = ``;
//         const reverseArr = nLine.reverse();
//         for ( let i = nLine.indexOf(depart) + 1; i < nLine.indexOf(arrive); i++ ) {
//         names = reverseArr[i];
//         console.log(names);
//         }
//     }
    
//     console.log(nameOfStops());
//     }


// const indexDep = console.log(nLine.indexOf(depart));
// const indexArr = console.log(nLine.indexOf(arrive));

// index position of depart
// index position of arrive




const nLine = [`Times Square`, `34th`, `28th`, `23rd`, `Union Square`, `8th`]
const lLine = [`10th`, `6th`, `Union Square`, `3rd`, `1st`]
const sixLine = [`Grand Central`, `63rd`, `88th`, `53rd`, `Union Square`, `Astor Place`]

const depart = `Times Square`;
const arrive = `28th`;

// logic for the N line //

if ( nLine.indexOf(depart) < nLine.indexOf(arrive) ) {

const numberOfStops = () => {
    counter = 0;
    for ( let i = nLine.indexOf(depart) + 1; i < nLine.indexOf(arrive); i++ ) {
    counter += 1;
    }
    return counter;
}

console.log(`There are ` + numberOfStops() + ` stops until you get off the train.`);

const nameOfStops = () => {
    names = ``;
    for ( let i = nLine.indexOf(depart) + 1; i < nLine.indexOf(arrive); i++ ) {
    names = nLine[i];
    console.log(names);
        }
    }
console.log(nameOfStops());
}
    else if ( nLine.indexOf(depart) > nLine.indexOf(arrive) ) {

    const numberOfStops = () => {
        counter = 0;
        for ( let i = nLine.indexOf(arrive) + 1; i < nLine.indexOf(depart); i++ ) {
        counter += 1;
        }
        return counter;
    }
    
    console.log(`There are ` + numberOfStops() + ` stops until you get off the train.`);
    
    const nameOfStops = () => {
        names = ``;
        const reverseArr = nLine.reverse();
        for ( let i = nLine.indexOf(depart) + 1; i < nLine.indexOf(arrive); i++ ) {
        names = reverseArr[i];
        console.log(names);
        }
    }
    
    console.log(nameOfStops());
    } 

// logic for the L line

        else if ( lLine.indexOf(depart) < lLine.indexOf(arrive) ) {

            const numberOfStops2 = () => {
                counter = 0;
                for ( let i = lLine.indexOf(depart) + 1; i < lLine.indexOf(arrive); i++ ) {
                counter += 1;
                }
                return counter;
            }
            
            console.log(`There are ` + numberOfStops2() + ` stops until you get off the train.`);
            
            const nameOfStops2 = () => {
                names = ``;
                for ( let i = lLine.indexOf(depart) + 1; i < lLine.indexOf(arrive); i++ ) {
                names = lLine[i];
                console.log(names);
                    }
                }
            console.log(nameOfStops2());
            }
                else if ( lLine.indexOf(depart) > lLine.indexOf(arrive) ) {
            
                const numberOfStops2 = () => {
                    counter = 0;
                    for ( let i = lLine.indexOf(arrive) + 1; i < lLine.indexOf(depart); i++ ) {
                    counter += 1;
                    }
                    return counter;
                }
                
                console.log(`There are ` + numberOfStops() + ` stops until you get off the train.`);
                
                const nameOfStops2 = () => {
                    names2 = ``;
                    const reverseArr2 = lLine.reverse();
                    for ( let i = lLine.indexOf(depart) + 1; i < lLine.indexOf(arrive); i++ ) {
                    names2 = reverseArr2[i];
                    console.log(names2);
                    }
                }
                
                console.log(nameOfStops2());
                }

                // logic for the 6 line

        else if ( sixLine.indexOf(depart) < sixLine.indexOf(arrive) ) {

            const numberOfStops3 = () => {
                counter = 0;
                for ( let i = sixLine.indexOf(depart) + 1; i < sixLine.indexOf(arrive); i++ ) {
                counter += 1;
                }
                return counter;
            }
            
            console.log(`There are ` + numberOfStops3() + ` stops until you get off the train.`);
            
            const nameOfStops3 = () => {
                names = ``;
                for ( let i = sixLine.indexOf(depart) + 1; i < sixLine.indexOf(arrive); i++ ) {
                names = sixLine[i];
                console.log(names);
                    }
                }
            console.log(nameOfStops3());
            }
                else if ( sixLine.indexOf(depart) > sixLine.indexOf(arrive) ) {
            
                const numberOfStops3 = () => {
                    counter = 0;
                    for ( let i = sixLine.indexOf(arrive) + 1; i < sixLine.indexOf(depart); i++ ) {
                    counter += 1;
                    }
                    return counter;
                }
                
                console.log(`There are ` + numberOfStops3() + ` stops until you get off the train.`);
                
                const nameOfStops3 = () => {
                    names3 = ``;
                    const reverseArr3 = sixLine.reverse();
                    for ( let i = sixLine.indexOf(depart) + 1; i < sixLine.indexOf(arrive); i++ ) {
                    names3 = reverseArr3[i];
                    console.log(names3);
                    }
                }
                
                console.log(nameOfStops3());
                }

                // logic for the 6 line

        