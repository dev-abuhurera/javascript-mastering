// Challenge


const data1 = [7.5, 8, 6.5, 0, 8.5, 4, 0];

let totalWorkHour = 0, avgDailyHours = 0, dayNo = 0, maxWorked = 0;

const freeLancTrack = (data) => {
    
    maxWorked = data[0];
    for(let i = 0; i < data.length; i++){

        totalWorkHour += data[i];

        if(data[i] > maxWorked){
            maxWorked = data[i];
            dayNo = i + 1;
        }

    }

    console.log(`Total Hours Worked: ${totalWorkHour}`);

    avgDailyHours = totalWorkHour / data.length;
    
    console.log(`Average Daily Hours: ${avgDailyHours}`);

    console.log(`Most hours worked: ${maxWorked} on Day ${dayNo}`);


}

freeLancTrack(data1);