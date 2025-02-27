

# import replicate


# from dotenv import load_dotenv
# import os
# load_dotenv()
# REPLICATE_API_TOKEN = os.getenv("REPLICATE_API_TOKEN")


# client = replicate.Client(api_token=REPLICATE_API_TOKEN)

# training = client.trainings.create(
#     model="replicate/dreambooth",
#     version="a8ba568da0313951a6b311b43b1ea3bf9f2ef7b9fd97ed94cebd7ffd2da66654",
#     input={
#         "instance_prompt": "a photo of abc obamaai",  
#         "class_prompt": "a photo of a person",         
#         "instance_data": "https://www.dropbox.com/scl/fi/gm6tw63op04rzrkto72vm/barack-dataset.zip?rlkey=i98sfd0g0ttmn0rxrrgjk8rme&st=ih51nt1i&dl=0",
#         "max_train_steps": 500,
#         "ckpt_base": "stabilityai/stable-diffusion-xl-base-1.0",
#         "resolution":512
#     },
#     destination="drins/obamaai-model"  
# )

# print(f"Training ID: {training.id}")
# print(f"Monitor progress: https://replicate.com/trainings/{training.id}")





