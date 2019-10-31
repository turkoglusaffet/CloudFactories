abstract class CloudFactories {
    public abstract factoryService(): Factory;
    public sendMessage(): string { //send message
        return `-->${this.factoryService().sendMessage()}`;
    }
}

class AZFactory extends CloudFactories {
    public factoryService(): Factory {
        return new AZService();
    }
}

class AWSFactory extends CloudFactories {
    public factoryService(): Factory {
        return new AWSService();
    }
}

interface Factory {
    sendMessage(): string;
}

class AZService implements Factory {
    public sendMessage(): string {
        return '{Result of the AZService}';
    }
}

class AWSService implements Factory {
    public sendMessage(): string {
        return '{Result of the AWSService}';
    }
}

class CloudInstance {
    private static instance: CloudFactories;

    private constructor() { }

    public static getInstance(): CloudFactories {
        if (!CloudInstance.instance) {
            CloudInstance.instance = platform === "AZ" ? new AZFactory() : new AWSFactory();
        }

        return CloudInstance.instance;
    }
}

function sendMessage() {
    console.log(CloudInstance.getInstance().sendMessage());
}

let platform = "AZ";
sendMessage();