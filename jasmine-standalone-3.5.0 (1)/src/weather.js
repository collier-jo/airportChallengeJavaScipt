class Weather {

    weatherChecker = () => {
        return (Math.floor(Math.random() * 100) +1 < 90)? false : true; 
    }
}