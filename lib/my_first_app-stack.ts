import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class MyFirstAppStack extends cdk.Stack {
	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props);

		// The code that defines your stack goes here

		const myLambdaRestApi = new cdk.aws_lambda.Function(this, 'lambdaRestApi', {
			functionName: 'lambdaRestApi',
			runtime: cdk.aws_lambda.Runtime.NODEJS_16_X,
			code: cdk.aws_lambda.Code.fromAsset('lambda'),
			handler: 'index.handler'
		})

		const api = new cdk.aws_apigateway.LambdaRestApi(this, "RestApi", {
      handler: myLambdaRestApi,
      proxy:false
    });

		const todos = api.root.addResource('todos');
		todos.addMethod('GET');
		todos.addMethod('POST');
		todos.addResource('{todo}').addMethod('GET');		
	}
}
