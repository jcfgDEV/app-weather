let d = new Date();
let ye = new Intl.DateTimeFormat('pt', { year: 'numeric' }).format(d);
let mo = new Intl.DateTimeFormat('pt', { month: 'long' }).format(d);
let dayNumber = new Intl.DateTimeFormat('pt', { day: '2-digit' }).format(d);
let dayWeek =  d.toLocaleDateString(undefined, {weekday: 'long'});

const Dates = `${dayWeek} ${mo} ${dayNumber} ${ye}`

export {Dates};
