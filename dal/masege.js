import { getDB } from "../db/db_Connection.js"; 
import { ObjectId } from "mongodb"; 

// 1. הוספת דוח חדש - POST /reports
export async function insertReport(reportData) {
    const newReport = {
        fieldCode: reportData.fieldCode,     // מזהה סוכן (String)
        location: reportData.location,       // שם אזור (String)
        threatLevel: reportData.threatLevel, // רמת איום 1-5 (Number)
        description: reportData.description, // סיכום מודיעין (String)
        timestamp: new Date(),               // זמן הדיווח - מוגדר אוטומטית
        confirmed: false                     // האם אומת - ברירת מחדל false
    };
    return await getDB().collection('intel_reports').insertOne(newReport);
}

// 2. קבלת כל הדוחות - GET /reports
export async function getAllReports() {
    return await getDB().collection('intel_reports').find({}).toArray();
}

// 3. דוחות ברמת סיכון גבוהה (>= 4) - GET /reports/high
export async function getHighThreatReports() {
    return await getDB().collection('intel_reports').find({ 
        threatLevel: { $gte: 4 } 
    }).toArray();
}

// 4. אישור דוח - PUT /reports/:id/confirm
export async function confirmReport(id) {
    return await getDB().collection('intel_reports').updateOne(
        { _id: new ObjectId(id) },
        { $set: { confirmed: true } }
    );
}

// 5. מחיקת דוח - DELETE /reports/:id
export async function deleteReport(id) {
    return await getDB().collection('intel_reports').deleteOne({ 
        _id: new ObjectId(id) 
    });
}