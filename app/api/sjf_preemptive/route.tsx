import { exec } from 'child_process';
import { NextRequest, NextResponse } from 'next/server';

interface Process {
    arrival_time: number;
    burst_time: number;
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();        
        const { n, processes }: { n: number, processes: Process[] } = body;

        let input = `${n}\n`;
        processes.forEach((process) => {
            input += `${process.arrival_time} ${process.burst_time}\n`;
        });

        // Use a Promise to handle the asynchronous `exec` call
        const output = await new Promise<string>((resolve, reject) => {
            const child = exec('"C:/Users/ribha/OneDrive/Desktop/Next App/my-app/app/api/sjf_preemptive/sjf_preemptive.exe"', (error, stdout, stderr) => {
                if (error) {
                    console.log(error);
                    reject(stderr);
                } else {
                    resolve(stdout);
                }
            });

            child.stdin?.write(input);
            child.stdin?.end();
        });

        return NextResponse.json({ output }, { status: 200 });
    } catch (error) {
        const err = error as Error;
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
