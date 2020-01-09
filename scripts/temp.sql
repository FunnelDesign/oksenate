select field_meeting_notice_lnd_st_asg_value from node__field_meeting_notice_lnd_st_asg;

UPDATE node__field_meeting_notice_lnd_st_asg
   SET field_meeting_notice_lnd_st_asg_value = REPLACE(field_meeting_notice_lnd_st_asg_value,'*','');