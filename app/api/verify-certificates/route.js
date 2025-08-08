import { NextResponse } from 'next/server';

const certificateDatabase = {
    'db291f9e-b1cd-4566-a886-2d38e4fc9d8e': {
        name: 'Aakash Khandelwal',
        event: 'Introduction to Cloud Computing on AWS for Beginners [2025]',
        organization: 'Udemy',
        unique_code: 'db291f9e-b1cd-4566-a886-2d38e4fc9d8e',
        points: '100'
    },
    '431df437-Oe7e-40ab-8aab-2b25739d17b4': {
        name: 'Harshit Tagotra',
        event: 'Mastering Data Structures & Algorithms using C and C++',
        organization: 'Udemy',
        unique_code: '431df437-Oe7e-40ab-8aab-2b25739d17b4',
        points: '100'
    },
    '5H9l2g60621739F1mn': {
        name: 'Parag Dongre',
        event: 'AI for India 2.0',
        organization: 'Skill India Digital',
        unique_code: '5H9l2g60621739F1mn',
        points: '100'
    }
};

export async function POST(request) {
    try {
        const { unique_code } = await request.json();
        
        if (!unique_code) {
            return NextResponse.json(
                { success: false, message: 'Unique code is required' },
                { status: 400 }
            );
        }

        const certificate = certificateDatabase[unique_code];
        
        if (certificate) {
            return NextResponse.json({
                success: true,
                certificateDetails: certificate
            });
        } else {
            return NextResponse.json(
                { success: false, message: 'Certificate not found' },
                { status: 404 }
            );
        }
    } catch (error) {
        return NextResponse.json(
            { success: false, message: 'Internal server error' },
            { status: 500 }
        );
    }
}
