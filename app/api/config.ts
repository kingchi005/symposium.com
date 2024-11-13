import fs from "fs";
import pino from "pino";
import { NextFunction, Request, Response, Router } from "express";
import mysql from "mysql2/promise";
import { configDotenv } from "dotenv";
configDotenv();

export const Logger = pino({
	transport: {
		target: "pino-pretty",
		options: { translateTime: "SYS:dd-mm-yy hh:mm:ss" },
	},
});

export class AppResponse {
	public static success<D = unknown>(
		res: Response,
		message: string,
		data?: D,
		statusCode: number = STATUS_CODE.OK
	) {
		res.status(statusCode).json({
			ok: true,
			message: message,
			data: data,
		});
	}

	public static error(
		res: Response,
		message: string,
		error?: unknown,
		statusCode: number = STATUS_CODE.INTERNAL_SERVER_ERROR
	) {
		res.status(statusCode).json({
			ok: false,
			message: message,
			error: error,
		});
	}
}

export const STATUS_CODE = {
	OK: 200,
	CREATED: 201,
	ACCEPTED: 202,
	NO_CONTENT: 204,
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401,
	FORBIDDEN: 403,
	NOT_FOUND: 404,
	METHOD_NOT_ALLOWED: 405,
	NOT_ACCEPTED: 406,
	CONFLICT: 409,
	INTERNAL_SERVER_ERROR: 500,
	BAD_GATEWAY: 502,
	SERVICE_UNAVAILABLE: 503,
	GATEWAY_TIMEOUT: 504,
	PAYMENT_REQUIRED: 402,
} as const;

export const UserType = {
	STAFF: "staff",
	ADMIN: "admin",
} as const;

class DB {
	private connection!: mysql.Connection;
	constructor(private url: string) {}

	public async connect() {
		this.connection = await mysql.createConnection(this.url);
	}

	public async close() {
		this.connection.end();
	}

	public async query(sql: string, params?: (string | number)[]) {
		return await this.connection.execute(sql, params);
	}
}

export const db = new DB(process.env.DATABASE_STRING!);


export async function intitModel(){
 let sql = await fs.promises.readFile("C:/Users/itces/Downloads/if0_36450268_symposium_db.sql","utf8")
 sql=`
 INSERT INTO participant (id, email, first_name, middle_name, last_name, role, phone_number, school, department, level, created_at) VALUES
(34, 'emmanuel.amadi@futo.edu.ng', 'Amadi ', 'Emmanuel ', 'Chukwudi ', 'staff', '08062142392', 'SICT', 'IFT', '', '2024-07-10 17:50:35.997'),
(35, 'sokolie@futo.edu.ng', 'Stanley', 'Adiele', 'Okolie', 'staff', '08030877005', 'SICT', 'CSC', '', '2024-07-10 18:07:52.107'),
`
 const res=await db.query(sql).catch(err=>Logger.fatal(err,"Error seeding"))
// Logger.info(res[0])
 // Logger.info("seeded")
}
