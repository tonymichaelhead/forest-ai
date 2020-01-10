<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Carbon\Carbon;


/**
 * Recieves a message to submit to Forest AI api and returns a response object.
 */
class ForestController extends Controller
{
    public function messageForest(Request $request)
    {
        $apiKey = env('FOREST_API_KEY');
        $forestId = 152951;

        $apiSecret = env('FOREST_API_SECRET');

        $currentTime = Carbon::now();

        $message = array(
            'message' => array(
              'message' => $request->message,
              'chatBotID' => $forestId,
              'timestamp' => $currentTime->timestamp
            ),
            'user' => array(
              'firstName' => 'Tugger',
              'lastName' => 'Sufani',
              'gender' => 'm',
              'externalID' => 'abc-639184572'
            )
        );

        $messageJSON = json_encode($message);

        $hash = hash_hmac('sha256', $messageJSON, $apiSecret);


        $url = "https://www.personalityforge.com/api/chat/?apiKey=".$apiKey."&hash=".$hash."&message=".urlencode($messageJSON);
        
        $client = new Client();
        $response = $client->get($url);
        $body = $response->getBody();

        return (string)$body;
    }

    /**
     * Encrypt message object and return it.
     */
    public function encryptObject($message)
    {

      

        
    }

}

