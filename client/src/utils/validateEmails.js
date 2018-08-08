const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default (emails) => {
    const invalidEmailArr = emails.split(',').map(e => e.trim()).filter(e => re.test(e) === false);    

    if(invalidEmailArr.length) {
        return `These emails are invalid: ${invalidEmailArr}`;
    }

    return;
}

