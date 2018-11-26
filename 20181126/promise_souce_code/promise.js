class Promise {
    constructor(executor) {
        this.status = 'pending';
        this.value = undefined;
        this.reason = undefined;
        this.onResolveCallBacks = [];
        this.onRejectCallBacks = [];
        let resolve = (value) => {
            this.status = 'resolved';
            this.value = value;
            this.onResolveCallBacks.forEach(fn => fn());
        }
        let reject = (reason) => {
            this.status = 'rejected';
            this.resolve = reason;
            this.onRejectCallBacks.forEach(fn => fn());
        }
        executor(resolve, reject);
    }
    then(onFullfield, onRejected) {

        if (this.status === 'pending') {
            this.onResolveCallBacks.push(() => {
                onFullfield(this.value);
            });
            this.onRejectCallBacks.push(() => {
                onRejected
            });
        }


        // if (this.status === 'resolved') {
        //     onFullfield(this.value);
        // }
        // if (this.status === 'rejected') {
        //     onRejected(this.value);
        // }
    }
}

module.exports = Promise;