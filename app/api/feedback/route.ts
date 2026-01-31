import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resendApiKey = process.env.RESEND_API_KEY;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, message } = body;

    // Validate input
    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required' },
        { status: 400 }
      );
    }

    // If no API key is configured, return a development message
    if (!resendApiKey) {
      console.log('Feedback received (Development Mode):', { email, message });
      return NextResponse.json(
        { success: true, message: 'Feedback received (API key not configured for development)' },
        { status: 200 }
      );
    }

    // Send email using Resend
    const resend = new Resend(resendApiKey);
    const data = await resend.emails.send({
      from: 'CPU Scheduler Feedback <onboarding@resend.dev>', // Replace with your verified domain
      to: ['ribhavsingla2166@gmail.com'],
      replyTo: email,
      subject: 'New Feedback from CPU Scheduling Visualizer',
      html: `
        <h2>New Feedback Received</h2>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send feedback' },
      { status: 500 }
    );
  }
}
