import { APIGatewayProxyEvent, Context, APIGatewayProxyResult } from 'aws-lambda'

export async function handler(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
	console.log("event=============>", event);
	console.log("context=============>", context);

	return {
		statusCode: 200,
		headers: {"Content-Type": "text/plain"},
		body: "Hello there from haris' first serverless API"
	}
}