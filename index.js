window.addEventListener('DOMContentLoaded', init);
const console_log = document.getElementById("log");
const console_error = document.getElementById("error");
const console_count = document.getElementById("count");
const console_warn = document.getElementById("warn");
const console_assert = document.getElementById("assert");
const console_clear = document.getElementById("clear");
const console_dir = document.getElementById("dir");
const console_dirxml = document.getElementById("dirxml");
const console_groupStart = document.getElementById("groupStart");
const console_groupEnd = document.getElementById("groupEnd");
const console_table = document.getElementById("table");
const console_startTimer = document.getElementById("startTimer");
const console_endTime = document.getElementById("endTime");
const console_trace = document.getElementById("trace");
const console_globalError = document.getElementById("globalError");

/** Initializes every function, they all stem from here */
function init() {
    console_log.addEventListener('click', () => {
        console.log("click console log")
    })

    console_error.addEventListener('click', () => {
        console.error("click console error")
    })

    console_count.addEventListener('click', () => {
        console.count('coffee');
    })
    console_warn.addEventListener('click', () => {
        console.warn('warn');
    })

    console_assert.addEventListener('click', () => {
        const x = 5;
        const y = 3;
        const reason = 'x is expected to be less than y';
        console.assert(x < y, { x, y, reason });
    })

    console_clear.addEventListener('click', () => {
        console.clear();
    })

    console_dir.addEventListener('click', () => {
        console.dir(document.head);
    })

    console_dirxml.addEventListener('click', () => {
        console.dirxml(document);
    })

    console_groupStart.addEventListener('click', () => {
        const label = 'Adolescent Irradiated Espionage Tortoises';
        console.group(label);
        console.info('Leo');
        console.info('Mike');
        console.info('Don');
        console.info('Raph');

    })

    console_groupEnd.addEventListener('click', () => {
        const label = 'Adolescent Irradiated Espionage Tortoises';
        console.groupEnd(label);
    })

    console_table.addEventListener('click', () => {
        console.table([
            {
                first: 'René',
                last: 'Magritte',
            },
            {
                first: 'Chaim',
                last: 'Soutine',
                birthday: '18930113',
            },
            {
                first: 'Henri',
                last: 'Matisse',
            }
        ]);
    })
    console_startTimer.addEventListener('click', () => {
        console.time();
        for (var i = 0; i < 100000; i++) {
            let square = i ** 2;
        }
    })
    console_endTime.addEventListener('click', () => {
        console.timeEnd();
    })
    console_trace.addEventListener('click', () => {
        const first = () => { second(); };
        const second = () => { third(); };
        const third = () => { fourth(); };
        const fourth = () => { console.trace(); };
        first();
    })

    console_globalError.addEventListener('click', () => {
        window.addEventListener('error', function () {
            console.log('error from handler');
        });
        new Promise(function () {
            throw new Error("fail");
        }).catch(function (error) {
            setTimeout(() => { throw new Error("Last exception in last chain link") }, 0);
        });
    })
    registerError()
    //part 3
    triggerError()
    //part 4
    throwError()

    //part 5
    TrackJS.track('Testing TrackJS!');
}

function triggerError() {
    try {
        const a = 1
        a = 2
    } catch (e) {
        console.error(e); // pass exception object to err handler
    } finally {
        console.log("part 3, trigger an error")
    }
}
class MathError extends Error {
    constructor(message) {
        super(message); // (1)
        this.name = "MathError"; // (2)
    }
}

function throwError() {
    try {
        divide(3, -1)
    } catch (e) {
        console.error(e.message, e.name); // pass exception object to err handler
    }
}


function divide(a, b) {
    if (b == -1) {
        throw new MathError('DivByNegativeNumber');
    } else {
        return a / b
    }
}

function registerError() {
    if (window.onerror) {
        // then one exists
        console.log("we had a error!")
    }
}